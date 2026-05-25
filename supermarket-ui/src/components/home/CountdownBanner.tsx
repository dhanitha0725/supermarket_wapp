import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function CountdownBanner() {
  return (
    <section className="py-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-[#006241] rounded-[24px] overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/3 h-64 md:h-auto">
            <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638ce?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Fresh Food" />
          </div>
          
          {/* Center Content */}
          <div className="w-full md:w-1/3 p-10 flex flex-col items-center text-center z-10">
            <Badge className="bg-[#D4E9E2] text-[#006241] hover:bg-[#D4E9E2] mb-4 border-none text-sm px-4 py-1">Summer Discount</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Up to 50% Off on Fresh Produce</h2>
            
            {/* Timer */}
            <div className="flex gap-4 mb-8">
              {[
                { label: "Days", val: "02" },
                { label: "Hours", val: "14" },
                { label: "Mins", val: "45" },
                { label: "Secs", val: "30" }
              ].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-white text-[#1E3932] font-bold text-2xl h-14 w-14 rounded-xl flex items-center justify-center shadow-inner mb-2">
                    {time.val}
                  </div>
                  <span className="text-white/80 text-xs uppercase font-medium tracking-wider">{time.label}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#cba258] hover:bg-[#b08d4b] text-[#1E3932] rounded-full px-10 py-6 text-lg font-bold transition-transform active:scale-95 shadow-lg">
              Shop The Sale
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/3 h-64 md:h-auto hidden md:block">
            <img src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Grocery Bags" />
          </div>
        </div>
      </div>
    </section>
  );
}
