

import './App.css';
import Header from './Header/Header';

import Item from './Item/Item';




function App() {


  return (
    <div className='App'>

      <Header></Header>

      <Item></Item>

      <h2>HOW REACT WORKS??</h2>
      <p>রিয়েক্ট কাজ করার জন্য দুইটা নোড পেকেজ দরকার
        ১ রিয়েক্ট
        ২. রিয়েক্ট ডম
        জাবাস্ক্রিপ্ট এর কোডকে এইচটিএমএল  কোডে কনভার্ট করার জন্য রিয়েক্ট নামের পেকেজটা কাজে লাগে.

        এই কোডকে  ইনজেক্ট করার জন্য একাটা ডমের দরকার আর সেইটা হলো রিয়েক্ট ডম


        এই ডম ইনজেক্ট ক্রিত কোডকে এইচটিএমএল এর মধ্যে  ইম্পোর্ট করে দে

        আর সেইটা আমরা ব্রাইজারে দেখি...
        আর এই পুরা কাজটি হয় ব্রাউজার রিলোড না হয়ে</p>
      <h2> WHAT IS THE DIFFERENCE BETWEEN STATE AND PROPS ??</h2>
      <p>
        যখন কোন  কম্পোনেন্টকে কল করা হয় তখন প্রপস ব্যবহার করি,

        স্টেট হলো কম্পোনেন্ট এর নিজস্ব ভেলু

        আমরা যদি  স্টেট এর ভেলু পরির্তন করি তাহলে সে অনুযায়ী   কম্পোনেন্ট বার বার রেন্ডার হতে থাকবে.

        আমরা স্টেট  পরিবর্তন করতে পারব কিন্তু প্রপস পরিবর্তন করতে পারব না
        স্টেট  এর পরির্তিত মান আমরা চাইলে প্রপস  হিসেবে ব্যবহার করতে পারি

      </p>

    </div >
  );
}

export default App;
