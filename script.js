const makeChange = (c) => {
  // your name here
	let coins=[1,5,10,25];
	let change=[0,0,0,0];
	let i=coins.length-1;
	while(c>=0&&i>=0)
		{
			console.log(c);
			if(c-coins[i]>=0)
			{
				c-=coins[i];
				change[i]++;
			}
			else {i--;}
		}
	let ans={q:change[3],d:change[2],n:change[1],p:change[0]};
	return ans;
};

// Do not the change the code below
const c =prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
