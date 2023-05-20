import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section>
        <nav>
          <Link href="/dashboard/profile">Profile</Link> |
          <Link href="/dashboard/settings">Settings</Link> |
          <Link href="/dashboard/checkout">Checkout</Link> |
          <Link href="/dashboard/order">Order</Link> |
          <Link href="/dashboard/products">Products</Link>
          <Link href="/">Go back to Home</Link>
        </nav>
      </section>
      <section>{children}</section>
    </div>
  );
}
