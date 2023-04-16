export default function FormError({ children }) {
  const message = (
    <>
      <b className="text-red-700 ">! </b>
      {children}
    </>
  );

  return (
    <div className="mt-2 text-lime-700 text-left">{children && message}</div>
  );
}
