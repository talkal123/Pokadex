import { LuListFilter } from "react-icons/lu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Filters = ({ valueFilter,setValueFilter }) => {

  const types = [
  "all",
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
  "stellar"
];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className='p-3 bg-blue-200 cursor-pointer rounded-full'>
          <LuListFilter className='w-5 h-5 text-white' />
        </div>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Filters</AlertDialogTitle>
          <AlertDialogDescription>
            <fieldset className="overflow-y-auto max-h-60">
  <legend className="font-semibold mb-2">Select Types:</legend>
  {types.map((type) => (
    <label key={type} className="flex items-center gap-2">
      <input
        type="radio"
        value={type}
        checked={valueFilter === type}
        onChange={(e) => setValueFilter(e.target.value)}
      />
      {type}
    </label>
  ))}
</fieldset>

          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Filters;
