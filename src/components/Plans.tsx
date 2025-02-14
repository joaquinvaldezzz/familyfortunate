import { useState } from 'react'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'

export default function Plans({
  name,
  description,
  package_tag,
  price,
  features,
  extra_name,
  extra_features,
  isPopular,
}: any) {
  const [showMore, setShowMore] = useState(false)

  return (
    // <div className="text-left">
    //   <Card
    //     className={`flex flex-col justify-between overflow-hidden rounded-lg border-none bg-white shadow-lg `}
    //   >
    //     <div className="relative grid grid-cols-1 items-center justify-between px-6 py-4 lg:grid-cols-2">
    //       {isPopular && (
    //         <span className="absolute left-4 top-0 ml-2 mt-5 inline-flex h-6 items-center justify-center rounded-full bg-eggshell px-2">
    //           <span className="text-xs font-bold text-lemon-curry ">Most Popular</span>
    //         </span>
    //       )}
    //       <h3 className="mt-10 text-left text-lg font-semibold lg:text-2xl">{name}</h3>
    //       <div className="flex items-start sm:items-center">
    //         <p className="flex items-start text-4xl font-bold lg:text-5xl">
    //           <span className="text-2xl lg:text-3xl">$</span>
    //           {price}
    //         </p>
    //         <p className="ml-1 mt-2 text-lg text-secondary-600 lg:mt-5">
    //           per year <span className="text-xs uppercase">(usd)</span>
    //         </p>
    //       </div>
    //     </div>

    //     <hr className="w-full" />
    //     <div className="px-6 py-4">
    //       <p className="text-left text-sm font-bold text-gray-800">FEATURES</p>
    //       {isPopular && (
    //         <p className="mt-2 text-sm text-gray-600">
    //           The essence of FamilyWise is your stories. With over 500 questions, prompts, and
    //           advice to guide you along the way, you’ll never lack inspiration. You’ll be surprised
    //           how quickly your legacy book takes shape.
    //         </p>
    //       )}
    //       <p className="mt-2 text-sm text-gray-600">{description}</p>
    //       <ul className="my-8 flex flex-col gap-4">
    //         {features?.map((feature: { id: any; item: any }, index: any) => (
    //           <li
    //             className={`flex items-center gap-3 ${index > 4 && (!showMore ? 'hidden' : '')}`}
    //             key={feature.id}
    //           >
    //             <CheckIcon className="h-4 w-4 shrink-0 text-lemon-curry lg:h-8 lg:w-8" />
    //             <span
    //               className="lg:text-normal text-sm text-secondary-600"
    //               dangerouslySetInnerHTML={{ __html: feature.item }}
    //             />
    //           </li>
    //         ))}
    //         {/*Extra features*/}

    //         {extra_features?.length > 0 && showMore && (
    //           <>
    //             <ul className="my-8 flex flex-col gap-4">
    //               <p className="text-left text-sm font-bold text-gray-800">{extra_name}</p>
    //               {extra_features?.map((extraFeature: { id: any; item: string }) => (
    //                 <li className="flex items-center gap-3" key={extraFeature.id}>
    //                   <CheckIcon className="h-4 w-4 shrink-0 text-lemon-curry lg:h-8 lg:w-8" />
    //                   <span className="lg:text-normal text-sm text-secondary-600">
    //                     {extraFeature.item}
    //                   </span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </>
    //         )}

    //         {features?.length > 5 && (
    //           <li
    //             className="cursor-pointer text-lemon-curry"
    //             onClick={() => setShowMore(!showMore)}
    //           >
    //             {showMore ? (
    //               <>
    //                 <MinusIcon className="mr-3 inline-block h-4 w-4" />
    //                 <span>Show less</span>
    //               </>
    //             ) : (
    //               <>
    //                 <PlusIcon className="mr-3 inline-block h-4 w-4" />
    //                 <span>Show more</span>
    //               </>
    //             )}
    //           </li>
    //         )}
    //       </ul>
    //       <hr className="w-full" />
    //       <Button
    //         type="link"
    //         color="yellow"
    //         href={`/get-started?plan=${package_tag}`}
    //         className="mt-4 w-full"
    //       >
    //         Choose {name}
    //       </Button>
    //     </div>
    //   </Card>
    // </div>
    <div>
      <div className="rounded-2xl border border-gray-200 px-6 pb-8 pt-10 shadow-lg lg:px-8">
        <div className="text-center">
          <div className="text-4xl font-semibold lg:text-5xl">${price}</div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mt-1 text-gray-500">{description}</p>
          </div>
        </div>

        <div className="my-8">
          <ul className="space-y-4 text-left">
            {features?.map((feature: { id: any; item: any }, index: any) => (
              <li className={`flex ${index > 4 && (!showMore ? 'hidden' : '')}`} key={feature.id}>
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <p
                  className="ml-3 flex-1 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: feature.item }}
                />
              </li>
            ))}
            {extra_features?.length > 0 && showMore && (
              <ul className="my-8 flex flex-col gap-4">
                <p className="text-left text-sm font-bold text-gray-800">{extra_name}</p>
                {extra_features?.map((extraFeature: { id: any; item: string }) => (
                  <li className="flex items-center gap-3" key={extraFeature.id}>
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    <span className="lg:text-normal text-sm text-secondary-600">
                      {extraFeature.item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {features?.length > 5 && (
              <li
                className="cursor-pointer text-lemon-curry"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? (
                  <>
                    <MinusIcon className="mr-3 inline-block h-4 w-4" />
                    <span>See less</span>
                  </>
                ) : (
                  <>
                    <PlusIcon className="mr-3 inline-block h-4 w-4" />
                    <span>See more</span>
                  </>
                )}
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col">
          <Link
            className="rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
            href={
              package_tag === 'Free-Trial' ? '/start-trial' : `/get-started?plan=${package_tag}`
            }
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}
