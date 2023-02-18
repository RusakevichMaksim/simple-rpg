export const queueCreate = ({ arr }: { arr: unutType[] }) => {
  const newArr: unutType[] = JSON.parse(
    JSON.stringify(arr?.sort((a, b) => (a.initiative < b.initiative ? 1 : -1)))
  );
  const maxInitiative = Math.max(...newArr.map((obj) => obj.initiative));
  const minInitiative = Math.min(...newArr.map((obj) => obj.initiative));
  //   console.log(minInitiative, maxInitiative);
  const queue: unutType[] = [];
  console.log(newArr, "newArr");

  for (let i = 0; i < Math.floor(maxInitiative / minInitiative); i++) {
    newArr.map((e) => {
      if (e.initiative - minInitiative * i >= minInitiative) {
        queue.push(e);
      }
      return e;
    });
  }
  return queue;
};

type unutType = {
  heals: number;
  defense: number;
  demage: number;
  initiative: number;
  name: string;
  type: string;
};
