import { Button } from "../ui/button";
import { Card, CardTitle, CardContent, CardHeader, CardDescription, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function CardContato() {
  return (
    <div className="flex justify-center items-center max-h-500 max-w-500 mt-4">
      <Card className="w-[350px] shadow-2xl">
      <CardHeader>
        <CardTitle>Contato</CardTitle>
        <CardDescription>Alguma sugestão ou reclamação?</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input required id="name" placeholder="Mateus Lima" />
              <Label htmlFor="email">Email</Label>
              <Input type="email" required id="email" placeholder="email@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Opções</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Sugestão" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Sugestão</SelectItem>
                  <SelectItem value="sveltekit">Reclamação</SelectItem>
                </SelectContent>
              </Select>
              <textarea className="p-4 rounded-lg" name="mensagem" id="" placeholder="Deixe sua mensagem"></textarea>
              <Button variant="outline">Cancelar</Button>
                <Button>Enviar</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}
