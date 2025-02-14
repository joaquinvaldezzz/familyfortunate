import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Spinner } from 'flowbite-react'

export default function Newsletter() {
  const [isLoading, setLoading] = useState(false)
  const [selected, setSelected] = useState('AU')

  let initialState = {
    first_name: '',
    last_name: '',
    email: '',
    country: selected,
  }

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: initialState })

  const onSubmit = async (data: any) => {
    setLoading(true)

    const configuration = {
      method: 'post',
      url: '/api/subscribe',
      data: {
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        country: data.country,
      },
    }
    // make the API call
    // make the API call
    await axios(configuration)
      .then(() => {
        toast.success(
          'Success! 🎉 You are now subscribed to receive our example questions & tips for writing your story.',
          {
            duration: 3000, // Specify the duration in milliseconds (3 seconds)
          }
        )
        setTimeout(() => {
          // After 3 seconds set the show value to false
          setLoading(false) //remove loader
          resetField('first_name')
          resetField('last_name')
          resetField('email')
        }, 3000)
      })
      .catch((err) => {
        toast.success('You are already subscribed. We are glad you are interested in us.', {
          duration: 3000, // Specify the duration in milliseconds (3 seconds)
        })
        setTimeout(() => {
          // After 3 seconds set the show value to false
          setLoading(false) //remove loader
          resetField('first_name')
          resetField('last_name')
          resetField('email')
        }, 3000)
      })
  }

  const onSelect = (code: string): void => {
    setSelected(code)
    setValue('country', code)
  }

  return (
    <section className="relative overflow-hidden pb-12 pt-64 md:pb-24">
      <img
        className="absolute inset-0 h-full w-full select-none object-cover"
        src="/images/image.jpg"
        alt=""
        loading="lazy"
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-white"></div>

      <div className="container relative">
        <div className="text-center">
          <div className="text-sm font-medium uppercase tracking-wide">
            Make every moment count!
          </div>
          <h2 className="mt-6 font-serif text-4xl font-bold">
            {' '}
            We&apos;ll remind you before important dates
          </h2>
        </div>

        <form className="mx-auto mt-8 max-w-screen-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 items-start justify-center gap-8 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="first-name">
                First name
              </label>
              <input
                className=" border-b border-b-gray-800 bg-transparent px-3 py-2 focus:outline-none"
                type="text"
                {...register('first_name', { required: 'Your must provide first name' })}
              />
              {errors.first_name && (
                <p className="mt-2 text-sm text-danger-500 peer-invalid:block">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="last-name">
                Last name
              </label>
              <input
                className=" border-b border-b-gray-800 bg-transparent px-3 py-2 focus:outline-none"
                type="text"
                {...register('last_name', { required: 'You must provide last name' })}
              />
              {errors.last_name && (
                <p className="mt-2 text-sm text-danger-500 peer-invalid:block">
                  {errors.last_name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="email-address">
                Email address
              </label>
              <input
                className="border-b border-b-gray-800 bg-transparent px-3 py-2 focus:outline-none"
                type="email"
                {...register('email', {
                  required: 'You must provide an email address',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-danger-500 peer-invalid:block">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium" htmlFor="phone-number">
                Country
              </label>

              <ReactFlagsSelect
                selected={selected}
                onSelect={onSelect}
                searchable={true}
                className="flag-select border-b border-b-gray-800 bg-transparent py-1"
                //className="flag-select w-full rounded-lg border-2 border-gray-300 bg-white !pb-0 shadow-sm transition focus:border-primary-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="mx-auto mt-4 max-w-sm text-center lg:mt-8">
            <button
              className="w-full rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 lg:w-32"
              type="submit"
            >
              {isLoading ? (
                <>
                  <Spinner aria-label="loading" />
                  <span className="ml-3">Sending</span>
                </>
              ) : (
                'Join us'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
