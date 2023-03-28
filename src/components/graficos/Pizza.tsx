import React from "react";
import { VictoryPie } from "victory";

interface PizzaProps {
  data: Array<Object>;
}

const Pizza = ({ data }: PizzaProps) => {
  const [graph, setGraph] = React.useState([]);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.nome,
        y: Number(item.percent),
      };
    });

    setGraph(graphData);
  }, [data]);

  return (
    <div className="absolute right-0 top-0 w-[200px] h-[200px] ">
      <VictoryPie
        data={graph}
        innerRadius={15}
       
        style={{
          data: {
            fillOpacity: 1,
            stroke: "#232323",
            strokeWidth: 5,
          },
        
        }}
      />
    </div>
  );
};

export default Pizza;
