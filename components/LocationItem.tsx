import { MdOpenInNew } from "@react-icons/all-files/md/MdOpenInNew";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";

export default function LocationItem({
  label,
  phone,
  distance,
  lat,
  lng,
}: {
  label: string;
  phone: string;
  distance?: number;
  lat: number;
  lng: number;
}) {
  return (
    <article className="bg-red-800 px-2 py-2 text-white rounded-sm">
      <h2 className="text-lg capitalize ">
        {label}{" "}
        {distance ? (
          <span className="text-xs lowercase">
            about{" "}
            {distance
              ? distance < 1
                ? distance.toPrecision(2) + "m"
                : distance.toPrecision(3) + "km"
              : null}{" "}
            from here.
          </span>
        ) : null}
      </h2>

      <div className="gap-2 items-center flex justify-between">
        <a
          className="text-sm hover:underline inline-flex items-center gap-2"
          href={`tel:${phone.replace(/\D/g, "")}`}
          rel="noreferrer"
        >
          {phone}
          <MdPhone />
        </a>
        <a
          href={`http://maps.google.com/?q=${lat},${lng}`}
          target="_blank"
          rel="noreferrer"
          className="self-end inline-flex items-center gap-2 hover:underline"
        >
          Open Google Maps <MdOpenInNew />
        </a>
      </div>
    </article>
  );
}
