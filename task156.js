
function ab(){
    let a=Number(prompt('Which Numbers Multiples U want?'));
    let b=Number(prompt('Enter Your Limit'));
    let sum=0;

    let odd=[];
    let even=[];
    let sq=[];
    let cub=[];
     let i=0;
     do{
        if(i% a==0){
            document.write(a)
            sum+=i;
            sq.push(i*i);
            cub.push(i*i*i)

            if(i%2==0){
                even.push(i)
            }
            if(i%2!=0){
                odd.push(i)
            }
        }
        i++;
     }while(i<=b)
     document.write('Total Sum= '+sum)
     document.write('Even'+even)
     document.write('Odd'+odd)
     document.write('sq'+sq)
     document.write('Cub'+cub)


    
}