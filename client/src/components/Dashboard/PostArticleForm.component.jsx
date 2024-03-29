import { useArticleStore } from '../../App/useArticleStore';

const PostArticleForm = () => {
  const { setTitle, setSummary, setCategory } = useArticleStore((state) => ({
    setTitle: state.setTitle,
    setCategory: state.setCategory,
    setSummary: state.setSummary,
  }));

  return (
    <form className='flex min-w-[80%] justify-center flex-col mx-[10rem] mb-[2rem] gap-3'>
      <label>Title:</label>
      <input
        type='text'
        className='dark:text-gray-600 w-full  outline-none placeholder:text-[.9rem] placeholder:text-[#959EAD] font-semibold py-[.6rem] pl-[1rem] rounded-lg'
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter article title'
      />
      <label>Summary:</label>

      <input
        className='dark:text-gray-600 w-full  outline-none placeholder:text-[.9rem] placeholder:text-[#959EAD] font-semibold py-[.6rem] pl-[1rem] rounded-lg'
        type='text'
        onChange={(e) => setSummary(e.target.value)}
        placeholder='Enter article summary'
      />
      <label>Category:</label>
      <select
        className='dark:text-gray-600 w-full  outline-none placeholder:text-[.9rem] placeholder:text-[#959EAD] font-semibold py-[.6rem] pl-[1rem] rounded-lg'
        name='category'
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''>--Select Category--</option>
        <option value='Finance'>Finance</option>
        <option value='Art'>Art</option>
        <option value='Technology'>Technology</option>
        <option value='Health'>Health</option>
        <option value='Business'>Business</option>
        <option value='Programming'>Programming</option>
        <option value='Gaming'>Gaming</option>
        <option value='Fitness'>Fitness</option>
        <option value='DIY'>DIY</option>
        <option value='Music'>Music</option>
        <option value='News'>News</option>
        <option value='Fashion'>Fashion</option>
        <option value='Education'>Education</option>
        <option value='Cooking'>Cooking</option>
      </select>
    </form>
  );
};

export default PostArticleForm;
