import Cardo from "@/components/card1/Cardo";



export default function Home() {
  return (
    <main>
      <div className="flex justify-between gap-4 w-full h-56 " >
        <div className="flex h-48 justify-center items-centre "><Cardo
        buttonName="Activate"
        bgcol="bg-lime-250"
        textcol="text-lime-500"
        bordercol="border-lime-150" /></div>
        <div className="flex h-48 justify-center items-centre "><Cardo
        buttonName="Inactivate"
        bgcol="bg-red-250"
        textcol="text-red-500"
        bordercol="border-red-150" /></div>
        <div className="flex h-48 justify-center items-centre "><Cardo
        buttonName="Activate"
        bgcol="bg-lime-250"
        textcol="text-lime-500"
        bordercol="border-lime-150" /></div>
      </div>
      <div className="flex justify-between gap-4 w-full h-56  " >
      <div className="flex h-48 justify-center items-centre "><Cardo
      buttonName="Activate"
      bgcol="bg-lime-250"
      textcol="text-lime-500"
      bordercol="border-lime-150" /></div>
        <div className="flex h-48 justify-center items-centre "><Cardo
        buttonName="Activate"
        bgcol="bg-lime-250"
        textcol="text-lime-500"
        bordercol="border-lime-150" /></div>
        <div className="flex h-48 justify-center items-centre "><Cardo
        buttonName="Activate"
        bgcol="bg-lime-250"
        textcol="text-lime-500"
        bordercol="border-lime-150" /></div>
      </div>
      <div className="flex justify-start gap-4 w-full h-56 " >
      <div className="flex h-48 justify-center items-centre "><Cardo
      buttonName="Activate"
      bgcol="bg-lime-250"
      textcol="text-lime-500"
      bordercol="border-lime-150" /></div>
        <div className="flex h-48 justify-center items-centre "><Cardo
        buttonName="Activate"
        bgcol="bg-lime-250"
        textcol="text-lime-500"
        bordercol="border-lime-150" /></div>
        
      </div>
      
    </main>
  )
}

