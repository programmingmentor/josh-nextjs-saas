import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../api/_trpc/client";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");
    const { data, isLoading } = trpc.authCallBack.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                router.push(origin ? `/${origin}` : '/dashboard');
            }
        }
    });
}

export default Page;
