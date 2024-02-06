export default function Footer() {
  return (
    <footer className="bg-white py-2 text-black">
      <div className="mx-auto flex flex-col justify-between px-4 md:flex-row">
        <div className="hidden w-full flex-col md:flex md:w-1/2">
          <h2 className="mx-auto md:font-bold">View Treatments</h2>
          <ul className="flex justify-around">
            <li className="cursor-pointer text-xs hover:underline md:text-sm">
              Genovian Pear Allergy
            </li>
            <li className="cursor-pointer text-xs hover:underline md:text-sm">
              Lycanthropy
            </li>
            <li className="cursor-pointer text-xs hover:underline md:text-sm">
              Plague
            </li>
            <li className="cursor-pointer text-xs hover:underline md:text-sm">
              Genovian Flu
            </li>
          </ul>
        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <h2 className="mx-auto font-bold">Have a question?</h2>
          <p className="mx-auto text-xs md:text-sm">Call us on 0208 123 0508</p>
        </div>
      </div>
    </footer>
  );
}
