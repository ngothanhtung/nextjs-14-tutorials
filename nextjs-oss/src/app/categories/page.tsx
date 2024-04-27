import axios from 'axios';
import React from 'react';

import Category from '@/components/categories/Category';

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600; // false | 0 | number (seconds)
// revalidate = 30 => 30 seconds
// revalidate = 0 => no revalidation
// revalidate = false => no revalidation

async function getCategories() {
  const response = await axios.get('https://server.aptech.io/online-shop/categories');
  const data = response.data;
  return data;
}

type Props = {};

export default async function Categories({}: Props) {
  const data = await getCategories();
  return (
    <div className='flex flex-col'>
      {data?.map((category: any) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
}
