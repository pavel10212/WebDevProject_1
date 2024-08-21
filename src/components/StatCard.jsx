import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const StatCard = ({ title, value, description, icon: Icon }) => (
  <Card
    className="
  flex-1 text-white 
  border 
  bg-white
  border-gray-500
  rounded-lg
   shadow-md
  "
  >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-lg font-bold text-slate-700">{title}</CardTitle>
      {Icon && <Icon className="h-4 w-4 text-slate-700" />}
    </CardHeader>
    <CardContent>
      <div className="text-2xl pb-2 font-bold text-red-600">{value}</div>
      <p className="text-xs text-slate-700 font-medium">{description}</p>
    </CardContent>
  </Card>
);

export default StatCard;
