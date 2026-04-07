'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { addBlog } from '@/app/actions/blog';
import toast from 'react-hot-toast';

export default function AdminBlogForm() {
  const [state, formAction, isPending] = useActionState(addBlog, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      formRef.current?.reset();
      setIsOpen(false);
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-[#2c2c2a] text-white font-medium text-sm rounded shadow hover:bg-black transition-colors my-4">
        + Write New Article
      </button>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow mt-4 border border-gray-100">
      <h3 className="text-2xl font-serif text-gray-800 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Create New Article</h3>
      <form action={formAction} ref={formRef} className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Article Title (Required)</label>
          <input type="text" name="title" required className="w-full p-3 border border-gray-300 rounded bg-gray-50 outline-none focus:border-[#9ab097]" />
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[250px]">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Short Summary / Excerpt (Optional)</label>
            <input type="text" name="excerpt" className="w-full p-3 border border-gray-300 rounded bg-gray-50 outline-none focus:border-[#9ab097]" placeholder="Appears on the homepage..." />
          </div>
          <div className="flex-1 min-w-[250px]">
             <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Image URL (Optional)</label>
             <input type="url" name="imageUrl" className="w-full p-3 border border-gray-300 rounded bg-gray-50 outline-none focus:border-[#9ab097]" placeholder="https://example.com/image.jpg" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Main Content (Required)</label>
          <textarea name="content" required className="w-full p-4 border border-gray-300 rounded bg-gray-50 min-h-[250px] outline-none focus:border-[#9ab097]" placeholder="Write your full article here..."></textarea>
        </div>
        <div className="flex gap-4 mt-4">
          <button type="submit" disabled={isPending} className="px-6 py-2.5 bg-[#4a6741] text-white text-sm font-semibold rounded hover:bg-green-800 transition-colors">
            {isPending ? 'Publishing...' : 'Publish Article'}
          </button>
          <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded hover:bg-gray-200 transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
