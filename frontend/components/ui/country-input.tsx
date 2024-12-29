'use client'

import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

type CountryInputProps = Omit<
    React.ComponentProps<"input">,
    "onChange" | "value" | "ref"
> &
    Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
        onChange?: (value: RPNInput.Value) => void;
    };

const CountryInput: React.ForwardRefExoticComponent<CountryInputProps> =
    React.forwardRef<React.ElementRef<typeof RPNInput.default>, CountryInputProps>(
        ({ className, onChange, ...props }, ref) => {
            return (
                <RPNInput.default
                    ref={ref}
                    className={cn("flex", className)}
                    // flagComponent={FlagComponent}
                    countrySelectComponent={CountrySelect}
                    inputComponent={InputComponent}
                    smartCaret={false}
                    /**
                     * Handles the onChange event.
                     *
                     * react-phone-number-input might trigger the onChange event as undefined
                     * when a valid phone number is not entered. To prevent this,
                     * the value is coerced to an empty string.
                     *
                     * @param {E164Number | undefined} value - The entered value
                     */
                    onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
                    {...props}
                />
            );
        },
    );
CountryInput.displayName = "CountryInput";

const InputComponent = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
    <Input
        className={cn("hidden rounded-e-lg rounded-s-none py-[22px]", className)}
        {...props}
        ref={ref}
    />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    options: CountryEntry[];
    onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
    disabled,
    value: selectedCountry,
    options: countryList,
    onChange
}: CountrySelectProps) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant="outline"
                    className="flex gap-1 w-full rounded-e-none justify-between rounded-lg py-[22px] px-3 focus:z-10"
                    disabled={disabled}
                >
                    {selectedCountry ?
                        <span className="">
                            {countryList.find(country => country.value === selectedCountry)?.label}
                        </span> :
                        <span className="text-muted-foreground">Select Country</span>
                    }

                    <ChevronsUpDown
                        className={cn(
                            "-mr-2 size-4 opacity-50",
                            disabled ? "hidden" : "opacity-100",
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-popover-content p-0">
                <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                        <ScrollArea className="h-72">
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {countryList.map(({ value, label }) =>
                                    value ? (
                                        <CountrySelectOption
                                            key={value}
                                            country={value}
                                            countryName={label}
                                            selectedCountry={selectedCountry}
                                            onChange={onChange}
                                        />
                                    ) : null,
                                )}
                            </CommandGroup>
                        </ScrollArea>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
    selectedCountry: RPNInput.Country;
    onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption = ({
    country,
    countryName,
    selectedCountry,
    onChange,
}: CountrySelectOptionProps) => {

    const { setValue, clearErrors, resetField } = useFormContext();

    const handleChange = () => {
        setValue('location', country)
        clearErrors('location');
        onChange(country);
        resetField('phoneNumber');
    }

    return (
        <CommandItem className="gap-2" onSelect={handleChange}>
            <FlagComponent country={country} countryName={countryName} />
            <span className="flex-1 text-sm">{countryName}</span>
            {/* <span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(country)}`}</span> */}
            <CheckIcon
                className={`ml-auto size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`}
            />
        </CommandItem>
    );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    const Flag = flags[country];

    return (
        <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full">
            {Flag && <Flag title={countryName} />}
        </span>
    );
};

export { CountryInput };
