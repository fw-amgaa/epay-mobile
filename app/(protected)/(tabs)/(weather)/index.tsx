import { HStack } from "@/components/ui/hstack";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VStack } from "@/components/ui/vstack";
import { usePayments } from "@/data/screens/list";
import { getBankName } from "@/lib/bank-codes";
import { currencyFormat } from "@/lib/utils";
import moment from "moment";
import React from "react";
import { ScrollView, Text } from "react-native";

const List = () => {
  const { payments } = usePayments();

  return (
    <VStack space="md" className="py-4 flex-1">
      <Text className="font-dm-sans-bold text-lg px-4">Гүйлгээний түүх</Text>

      <ScrollView horizontal={true} className="w-full">
        <Table className="w-full">
          <TableHeader className="overflow-x-scroll">
            <TableRow>
              <TableHead className="text-black">Нэхэмжлэхийн дугаар</TableHead>
              <TableHead className="text-black">Хүлээн авагч банк</TableHead>
              <TableHead className="text-black">Дансны дугаар</TableHead>
              <TableHead className="text-black">Дансны нэр</TableHead>
              <TableHead className="text-black">Гүйлгээний утга</TableHead>
              <TableHead className="text-black">Гүйлгээний дүн</TableHead>
              <TableHead className="text-black">Төлөв</TableHead>
              <TableHead className="text-black">Огноо</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(payments ?? []).map((payment) => (
              <TableRow key={payment._id}>
                <TableData className="text-black">
                  {payment.invoiceCode}
                </TableData>
                <TableData className="text-black">
                  {getBankName(payment.bankCode)}
                </TableData>
                <TableData className="text-black">
                  {payment.accountNumber}
                </TableData>
                <TableData className="text-black">
                  {payment.accountName}
                </TableData>
                <TableData className="text-black">
                  {payment.description}
                </TableData>
                <TableData className="text-black">
                  {currencyFormat(payment.amount || 0)}
                </TableData>
                <TableData className="text-black">
                  {payment.paymentStatus}
                </TableData>
                <TableData className="text-black">
                  {payment.createdAt
                    ? moment(payment.createdAt).utc().format("YYYY/MM/DD HH:mm")
                    : "-"}
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollView>
    </VStack>
  );
};

export default List;
