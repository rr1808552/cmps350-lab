import AccountsRepo from "@/app/api/accounts-repo";
const repo = new AccountsRepo();

export async function GET(request) {
  const result = await repo.getMinMaxBalance();
  return Response.json(result);
}
