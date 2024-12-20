interface SectionTittleProps {
  h3:string;

}

const SectionTittle:React.FC<SectionTittleProps > = ({ h3}) => {
   return (
    <div className="wrapper" data-aos='fade-right'
          data-aos-duration='1000'
    >
     
      <h3 className="text-2xl md:text-4xl font-semibold text-slate">{h3}</h3>
     
    </div>
  );
}

export default SectionTittle