
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Ticket } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { nanoid } from 'nanoid';

const ticketTypes = [
  { id: 'standard', name: 'Standard Pass', price: 99.99 },
  { id: 'vip', name: 'VIP Pass', price: 199.99 },
  { id: 'premium', name: 'Premium Pass', price: 299.99 },
];

const TicketPurchase = () => {
  const form = useForm({
    defaultValues: {
      ticketType: '',
    },
  });

  const onSubmit = async (data: { ticketType: string }) => {
    try {
      const selectedType = ticketTypes.find(t => t.id === data.ticketType);
      if (!selectedType) {
        throw new Error('Invalid ticket type');
      }

      const ticketCode = nanoid();
      
      const { error } = await supabase
        .from('tickets')
        .insert({
          ticket_type: data.ticketType,
          price: selectedType.price,
          ticket_code: ticketCode,
          user_email: 'test@example.com', // This should be replaced with actual user email when auth is implemented
        });

      if (error) throw error;

      toast.success('Ticket purchased successfully!', {
        description: 'Your QR code will be generated shortly.',
      });
      
    } catch (error) {
      toast.error('Failed to purchase ticket', {
        description: 'Please try again later.',
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Purchase Tickets</CardTitle>
        <CardDescription>Select your ticket type for FAFAFEST</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ticket Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        {ticketTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name} - ${type.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Ticket className="mr-2" />
              Purchase Ticket
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TicketPurchase;
