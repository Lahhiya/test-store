import { z } from "zod";
import { productDataType } from "@/schema/ProductItem.schemas";
import {
  validPaymentSchema,
  validServerIdSchema,
  validUserIdSchema,
  validVoucherSchema,
} from "@/schema/form.schemas";
import { DynamicIcon } from "lucide-react/dynamic";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import {
  modalType,
  wrapperDetailTrdType,
} from "@/schema/wrapper.schemas";
import { toast } from "sonner";
import { Key } from "lucide-react";
import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";

export default function FormProductPage({
  datas,
  setModal,
  wrapDetailTrd,
}: {
  datas: productDataType;
  setModal: modalType;
  wrapDetailTrd: wrapperDetailTrdType;
}) {
  const testVoucher = "0909";
  const filtered = datas.find((data) => data.id === wrapDetailTrd.detailTrd.id);

  function handleUserId(e : Number | string){
    const res = validUserIdSchema.safeParse(e)
    if(!res.success){
      return
    }
    wrapDetailTrd.setDetailTrd({
      key : "ADD_USERID",
      payload : res.data
    })
  }

  function handleServerId(e : Number | string){
    const res = validServerIdSchema.safeParse(e)
    if(!res.success){
      return
    }
    wrapDetailTrd.setDetailTrd({
      key : "ADD_SERVERID",
      payload : res.data
    })
  }

  function handlePayment(e : string){
    const res = validPaymentSchema.safeParse(e)
    if(!res.success){
      return
    }
    wrapDetailTrd.setDetailTrd({
      key : "ADD_PAYMENT",
      payload : res.data
    })
  }

  function handleVoucher(e : string){
    const res = validVoucherSchema.safeParse(e)
    if(!res.success){
      return
    }
    wrapDetailTrd.setDetailTrd({
      key : "ADD_VOUCHER",
      payload : res.data
    })
  }
  return (
    <div className="mt-4">
      {filtered ? (
        <div className="flex flex-col gap-4 w-full bg-muted/30 border border-border rounded-lg p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="brand" className="mb-2 block font-medium">
                Nama Product
              </Label>
              <Input
                type="text"
                disabled
                id="brand"
                value={
                  wrapDetailTrd.detailTrd.brand +
                  " " +
                  wrapDetailTrd.detailTrd.product
                }
                className="bg-background font-semibold"
              />
            </div>
            <div>
              <Label htmlFor="name" className="mb-2 block font-medium">
                Harga
              </Label>
              <Input
                disabled
                id="name"
                value={"Rp." + wrapDetailTrd.detailTrd.price?.toLocaleString()}
                className="bg-background font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="idUser" className="mb-2 flex font-medium gap-1">
                <p>User ID</p>
                <span className="text-red-600">*</span>
              </Label>
              <Input
                id="idUser"
                placeholder="Masukan User ID..."
                value={
                  wrapDetailTrd.detailTrd.userId
                    ? wrapDetailTrd.detailTrd.userId
                    : ""
                }
                onChange={(e)=> handleUserId(e.target.value)}
                className="bg-background focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label
                htmlFor="serverUser"
                className="mb-2 flex font-medium gap-1"
              >
                <p>Server ID</p>
                <span className="text-red-600">*</span>
              </Label>
              <Input
                id="serverUser"
                value={
                  wrapDetailTrd.detailTrd.serverId
                    ? wrapDetailTrd.detailTrd.serverId
                    : ""
                }
                onChange={(e) =>
                  handleServerId(e.target.value)
                }
                placeholder="Masukan ID Server..."
                className="bg-background focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="idUser" className="mb-2 flex font-medium gap-1">
                <p>Metode Pembayaran</p>
                <span className="text-red-600">*</span>
              </Label>
              <Select
                value={wrapDetailTrd.detailTrd.payment}
                onValueChange={handlePayment}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Metode Pembayaran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Metode Pembayaran</SelectLabel>
                    <SelectItem className="lowercase" value="bank">
                      Bank Transfer
                    </SelectItem>
                    <SelectItem className="lowercase" value="qris">
                      Qris
                    </SelectItem>
                    <SelectItem className="lowercase" value="gopay">
                      Gopay
                    </SelectItem>
                    <SelectItem className="lowercase" value="dana">
                      Dana
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="voucher" className="mb-2 flex font-medium gap-1">
                Punya Voucher?
                <span>
                  <DynamicIcon
                    className={`${
                      wrapDetailTrd.detailTrd.voucher === testVoucher
                        ? "text-green-500 visible"
                        : "invisible"
                    }`}
                    name="check"
                    size={15}
                  />
                </span>
              </Label>
              <Input
                id="voucher"
                type="text"
                value={
                  wrapDetailTrd.detailTrd.voucher
                    ? wrapDetailTrd.detailTrd.voucher
                    : ""
                }
                onChange={(e) =>
                  handleVoucher(e.target.value)
                }
                placeholder="Masukan Voucher..."
                className={"bg-background focus-visible:ring-primary"}
              />
            </div>
          </div>

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setModal.setter(true)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:cursor-pointer"
              >
                Bayar Sekarang
              </button>
            </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center justify-center p-8 text-muted-foreground border-2 border-solid border-border rounded-lg bg-muted/10">
          <DynamicIcon name="smile" className="w-10 h-10 opacity-50" />
          <h3 className="font-medium">Silakan pilih terlebih dahulu</h3>
        </div>
      )}
    </div>
  );
}
