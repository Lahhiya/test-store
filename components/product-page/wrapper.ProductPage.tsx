"use client";
import { useEffect, useReducer, useState } from "react";
import { productType } from "@/schema/ProductItem.schemas";
import ProductColletion from "@/api/ProductCollections.json";
import { notFound } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { initTransactionType, actionTrdType } from "@/schema/form.schemas";
import DesProductPage from "@/components/product-page/Des.ProductPage";
import ContProductPage from "@/components/product-page/Cont.ProductPage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { wrapBrandInfoType } from "@/schema/wrapper.schemas";

export default function PageProduct({
  item,
}: {
  item: { slug: string; category: string };
}) {
  const datas = ProductColletion as productType[];
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [modalLoad, setModalLoad] = useState<boolean>(false);

  const getIndex = datas.findIndex((data) => data.name === item.category);

  // handle modal loading
  let modalTime: NodeJS.Timeout | undefined;
  function handleConfirm() {
    setModalLoad(true)
    modalTime = globalThis.setTimeout(() => {
      setModalLoad(false);
    }, 3000);
  }
  useEffect(()=>{
    if(modalStatus){
      handleConfirm()
    }
    else{
      clearTimeout(modalTime)
    }
  },[modalStatus])

  const handleModal = {
    status: modalStatus,
    setter: setModalStatus,
  };
  // validate category
  if (getIndex === -1) {
    return notFound();
  }
  const getData = datas[getIndex].data;
  const whiteSlug = [...new Set(getData.flatMap((data) => data.slug))];

  // validate slug
  if (!whiteSlug.includes(item.slug)) {
    return notFound();
  }

  const ideticalData = getData.filter((data) => data.slug === item.slug);

  // init detail transaction
  const initDetailTrd: initTransactionType = {
    id: undefined,
    brand: "",
    product: "",
    price: 0,
    userId: undefined,
    serverId: undefined,
    payment: "",
    voucher: "",
    discount: 0,
  };

  function detailReducer(
    state: initTransactionType,
    action: actionTrdType,
  ): initTransactionType {
    switch (action.key) {
      case "ADD_ID":
        return { ...state, id: action.payload };
      case "ADD_BRAND":
        return { ...state, brand: action.payload };
      case "ADD_PRODUCT":
        return { ...state, product: action.payload };
      case "ADD_PRICE":
        return { ...state, price: action.payload };
      case "ADD_DISCOUNT":
        return {
          ...state,
          discount: state.price ? (action.payload / 100) * state.price : 0,
        };
      case "ADD_USERID":
        return { ...state, userId: action.payload };
      case "ADD_SERVERID":
        return { ...state, serverId: action.payload };
      case "ADD_PAYMENT":
        return { ...state, payment: action.payload };
      case "ADD_VOUCHER":
        return { ...state, voucher: action.payload };
      case "RESET_REDUC":
        if (action.payload === "sprkey") {
          return (state = {
            ...state,
            id: undefined,
            product: "",
            price: 0,
            userId: undefined,
            serverId: undefined,
            payment: "",
            voucher: "",
            discount: 0,
          });
        }
      default:
        return state;
    }
  }

  const [detailTrd, setDetailTrd] = useReducer(detailReducer, initDetailTrd);

  const wrapDetailTrd = {
    detailTrd,
    setDetailTrd,
  };


  useEffect(() => {
    wrapDetailTrd.setDetailTrd({
      key: "ADD_BRAND",
      payload: ideticalData[0].brand,
    });
  }, []);

  useEffect(() => {
    const aData = ideticalData.find(
      (data) => data.id === wrapDetailTrd.detailTrd.id,
    );
    if (aData) {
      wrapDetailTrd.setDetailTrd({
        key: "ADD_PRICE",
        payload: aData.price,
      });
      wrapDetailTrd.setDetailTrd({
        key: "ADD_PRODUCT",
        payload: aData.product,
      });
    }
  }, [wrapDetailTrd.detailTrd.id]);

  const discountActive = wrapDetailTrd.detailTrd.discount !== 0 ? true : false;
  const finalPrice = wrapDetailTrd.detailTrd.price
    ? wrapDetailTrd.detailTrd.price -
      (wrapDetailTrd.detailTrd.discount ? wrapDetailTrd.detailTrd.discount : 0)
    : 0;

  const WrapbrandInfo : wrapBrandInfoType = {
    name : ideticalData[0].brand,
    category : ideticalData[0].category,
    image : ideticalData[0].image
  }

  return (
    <div className="grid gap-5 mx-5 h-100 grid-cols-1 md:grid-cols-5">
      <DesProductPage brandInfo={WrapbrandInfo} />
      <ContProductPage
        brandInfo={WrapbrandInfo}
        datas={ideticalData}
        setModal={handleModal}
        wrapDetailTrd={wrapDetailTrd}
      />
      <Dialog open={modalStatus} onOpenChange={() => handleModal.setter(false)}>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>konfimasi Pembayaran</DialogTitle>
              <DialogDescription>
                tolong periksa kembali data yang anda masukan
              </DialogDescription>
            </DialogHeader>
            <Separator />
            <div className="grid gap-4">
              <p>
                Product :{" "}
                {wrapDetailTrd.detailTrd.brand +
                  " " +
                  wrapDetailTrd.detailTrd.product}
              </p>
              <p>
                Harga :{" "}
                <span
                  className={`me-1 ${discountActive ? "line-through text-sm" : ""}`}
                >
                  Rp.{wrapDetailTrd.detailTrd.price?.toLocaleString()}
                </span>
                <span className={discountActive ? "inline" : "hidden"}>
                  Rp.{finalPrice.toLocaleString()}
                </span>
              </p>
              <p>
                Detail ID :{" "}
                {wrapDetailTrd.detailTrd.userId +
                  "(" +
                  wrapDetailTrd.detailTrd.serverId +
                  ")"}
              </p>
              <p>Metode Pembayaran : {wrapDetailTrd.detailTrd.payment}</p>
            </div>
            <Separator />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                variant={"default"}
                disabled={modalLoad}
                type="submit"
                onClick={() => {
                  wrapDetailTrd.setDetailTrd({
                    key: "RESET_REDUC",
                    payload: "sprkey",
                  });
                  handleModal.setter(false);
                  toast.success("Transaksi berhasil", {
                    position: "top-center",
                  });
                }}
              >
                {modalLoad ? (
                  <>
                    <Spinner className="size-6 text-blue-500"></Spinner>{" "}
                    Saving...{" "}
                  </>
                ) : (
                  "Confirm"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
