export default function DashedSeparator() {
  return (
    <div className="w-full py-8">
      <div
        className="h-px w-full"
        style={{
          background:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 20px, transparent 25px, transparent 35px)",
        }}
      />
    </div>
  );
}