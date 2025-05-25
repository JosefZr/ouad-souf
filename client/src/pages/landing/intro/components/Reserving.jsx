import { Input, Select, SelectItem, useDisclosure, Button, ModalFooter, ModalContent } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
// const closeDays = [
//     formatISO(new Date(2024, 6, 30)), // Example closed day
//     // Add other closed days here
// ];

// const days = [
//     { dayOfWeek: 0, openTime: '08:00', closeTime: '18:00' }, // Sunday
//     { dayOfWeek: 1, openTime: '08:00', closeTime: '18:00' }, // Monday
//     { dayOfWeek: 2, openTime: '08:00', closeTime: '18:00' }, // Tuesday
//     { dayOfWeek: 3, openTime: '08:00', closeTime: '18:00' }, // Wednesday
//     { dayOfWeek: 4, openTime: '08:00', closeTime: '18:00' }, // Thursday
//     { dayOfWeek: 5, openTime: '08:00', closeTime: '18:00' }, // Friday
//     { dayOfWeek: 6, openTime: '08:00', closeTime: '18:00' }, // Saturday
// ];
export default function Reserving() {
    const e = useTranslations("Error")
    const action = useTranslations("callAction")
    // const [id,setUserId] = useState("");
    // const [comment,setComment] = useState("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = async (data) => {
    //     console.log(data)
    //     const {name, email, note } = data;
    //     const { success, error, userId } = await handleEmailName({ name, email });
    //     if (success) {
    //         console.log(userId)
    //         setUserId(()=>userId)
    //         setComment(()=>note)
    //     } else {
    //         console.log(error)
    //     }
    // };
    // const onError = (errors) => {
    //     console.log(errors);
    // };
    // const services = useServices();
    return (
        <div className=' bg-default rounded-lg p-8 '>
            <form
                // onSubmit={handleSubmit(onSubmit, onError)} 
                className=' flex flex-row max-sm:flex-col items-center gap-4 relative'
            >
                <div className=' flex flex-col w-full'>
                    <label htmlFor="name">Name</label>
                    <Input
                        // {...register("name", { required: "this information is required" })}
                        id='name'
                        type="text"
                        labelPlacement="outside"
                        placeholder="Enter Your Name"
                        size='lg'
                        variant='faded'
                    />
                    {/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
                </div>
                <div className=' flex flex-col w-full'>
                    <label htmlFor='email'>Email</label>
                    <Input
                        // {...register("email", { required: "this information is required" })}
                        id='email'
                        type="email"
                        labelPlacement="outside"
                        placeholder="Enter Your Email"
                        size='lg'
                        variant='faded'
                        autocomplete="email" // Adding autocomplete attribute
                    />
                    {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
                </div>
                <div className=' flex flex-col w-full'>
                    <label htmlFor='service'>Service</label>
                    <Select
                        // {...register("note", { required: "this information is required" })}
                        label="Select a service"
                        className="max-w-xs"
                        id='service'
                        size='sm'
                        radius='lg'
                        variant='faded'
                    >
                        {services.map((service) => (
                            <SelectItem key={service.titre}>
                                {service.titre}
                            </SelectItem>
                        ))}
                    </Select>
                    {/* {errors.note && <p className="text-red-500">{errors.note.message}</p>} */}
                </div>
                <Button
                    radius="xl"
                    size="lg"
                    className=' self-end min-w-40 bg-light-green'
                    color='primary'
                    // type="submit" 
                    onPress={onOpen}
                >
                    {action('text')}
                </Button>
            </form>
        </div>
    );
}