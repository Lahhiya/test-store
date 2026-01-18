"use client";
import { useEffect, useReducer, useState } from "react";
import { productType } from "@/schema/ProductItem.schemas";
import ProductColletion from "@/api/ProductCollections.json";
import { notFound } from "next/navigation";
import { initTransactionType, actionTrdType } from "@/schema/form.schemas";
import DesProductPage from "@/components/product-page/Des.ProductPage";
import ContProductPage from "@/components/product-page/Cont.ProductPage";
import { Button } from "@/components/ui/button";
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

export default function PageProduct({
  item,
}: {
  item: { slug: string; category: string };
}) {
  const datas = ProductColletion as productType[];
  const [brandInfo, setBrandInfo] = useState<string>("");
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const getIndex = datas.findIndex((data) => data.name === item.category);
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

  const indeticalData = getData.filter((data) => data.slug === item.slug);

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
    email: "",
    message: "",
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
      case "ADD_USERID":
        return { ...state, userId: action.payload };
      case "ADD_SERVERID":
        return { ...state, serverId: action.payload };
      case "ADD_PAYMENT":
        return { ...state, payment: action.payload };
      case "ADD_VOUCHER":
        return { ...state, voucher: action.payload };
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
      payload: indeticalData[0].brand,
    });
  }, []);

  useEffect(() => {
    const aData = indeticalData.find(
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

  return (
    <div className="grid gap-5 mx-5 h-100 grid-cols-1 md:grid-cols-5">
      <DesProductPage brandInfo={wrapDetailTrd.detailTrd.brand} />
      <ContProductPage
        datas={indeticalData}
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
            <div className="grid gap-4">
              <div className="grid gap-3">
                <p>id : {detailTrd.id}</p>
                <p>brand : {detailTrd.brand}</p>
                <p>product : {detailTrd.product}</p>
                <p>price : {detailTrd.price}</p>
                <p>userId : {detailTrd.userId}</p>
                <p>serverId : {detailTrd.serverId}</p>
                <p>payment : {detailTrd.payment}</p>
                <p>voucher :{detailTrd.voucher}</p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
