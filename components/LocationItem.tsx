import { useEffect } from "react";

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
    <article className="bg-green-50 px-2 py-2 rounded-sm">
      <h2 className="text-lg capitalize text-green-800">{label}</h2>

      <div className="flex gap-2 items-center">
        <span className="text-xs">
          ±
          {distance
            ? distance < 1
              ? distance.toPrecision(2) + "m"
              : distance.toPrecision(3) + "km"
            : null}
        </span>
        <a
          className="text-sm hover:underline"
          href={`tel:${phone.replace(/\D/g, "")}`}
        >
          {phone}
        </a>
        <a
          href={`http://maps.google.com/?q=${lat},${lng}`}
          target="_blank"
          rel="noopener"
        >
          Open Google Maps
        </a>
      </div>
    </article>
  );
}
