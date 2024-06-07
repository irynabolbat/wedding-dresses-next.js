import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/app/assets/icons/arrow-right.svg";
import { type } from "os";

type ButtonNextPageProps = {
  btnText: string;
  btnHref: string;
};

export default function ButtonNextPage({
  btnText,
  btnHref,
}: ButtonNextPageProps) {
  return (
    <Link
      href={btnHref}
      className="buttonNextPage"
    >
      {btnText}
      <Image
        src={ArrowRightIcon}
        width={20}
        height={20}
        alt="Arrow_icon"
      />
    </Link>
  );
}
