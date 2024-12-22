const texts = [
  "Boosts patient engagement with easy access to health info",
  "24/7 access to medical records and appointments",
  "Secure communication with healthcare providers",
  "Improves health outcomes through better self-management",
];
const KeyBenefits: React.FC<{ benefits: TextItem[] }> = ({ benefits }) => {
  return (
    <div className="space-y-2 rounded-2xl bg-main px-5 py-5 text-white md:space-y-5">
      <h6 className="text-lg font-bold uppercase md:text-xl">Key Benefits</h6>
      <ul className="list-disc space-y-2 pl-5 text-[10px] md:text-sm">
        {benefits.map((text) => {
          return <li key={text.id}>{text.text}</li>;
        })}
      </ul>
    </div>
  );
};
export default KeyBenefits;
