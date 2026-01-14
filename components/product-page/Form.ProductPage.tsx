import { productDataType } from "@/schema/ProductItem.schemas";
import { DynamicIcon } from "lucide-react/dynamic";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FormProductPage({datas,selected}: {datas:productDataType,selected:number}) {
  const [voucher,setVoucher] = useState<string>("")
  const testVoucher = "entahjirgueajagktau";
  const filtered = datas.find((data)=> data.id === selected)
  const validVoucher = testVoucher === voucher;

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
                disabled
                id="brand"
                value={filtered.brand + " " + filtered.name}
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
                value={"Rp." + filtered.price.toLocaleString()}
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
              <Select>
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
                      validVoucher ? "text-green-500 visible" : "invisible"
                    }`}
                    name="check"
                    size={15}
                  />
                </span>
              </Label>
              <Input
                id="voucher"
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Masukan Voucher..."
                className={"bg-background focus-visible:ring-primary"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="emailUser" className="mb-2 block font-medium">
                Email (optional)
              </Label>
              <Input
                id="emailUser"
                type="email"
                placeholder="Masukan Email..."
                className="bg-background focus-visible:ring-primary"
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:cursor-pointer">
                Beli Sekarang
              </button>
            </div>
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
