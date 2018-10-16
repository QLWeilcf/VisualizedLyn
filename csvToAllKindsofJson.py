#coding=utf-8

#import re


#各种类型的csv转json
'''
date,num
2017-9-6,1
----->
[ [2017-9-6:1],
[2017-5-12:2]
]
'''

def csvToJson1():
    addfile=open("12345.txt",'a+')
    addfile.write('[')
    with open("E:/LcfSoftware/HtmlAjsWorks/bill201701to.csv",'r') as fi:
        ali=fi.readlines()
        for al in ali:
            a=al.split()
            b=a[0].split(',')
            addfile.write("['"+b[0]+"',"+b[1]+"],")
    addfile.write(']')
    addfile.close()
    print(' csvToJson done')

'''
city,type
bj,6
hz,5
--->
[{name:"bj", value:6},
{name:"hz", value:5}]
'''
def csvToJson2():
    csv_in='D:/GeoData/cityfenji2018.csv'
    j_out_txt='E:/LcfSoftware/HtmlAjsWorks/cityfenji201811.txt'

    out_f=open(j_out_txt,'w+')
    out_f.write('[')
    with open(csv_in,'r') as fi:
        ali=fi.readlines()
        for al in ali:
            a=al.split()
            b=a[0].split(',')
            out_f.write('{name:"'+b[0]+'",value:'+b[1]+'},\n')

    out_f.write(']')
    out_f.close()
    print('csvToJson2 done')

'''
city,LNGQ,LATQ          | or   province,city,LNGQ,LATQ
合肥市,117.2217,31.8225  |  安徽省,合肥市,118.4275502,31.35470362
芜湖市,118.4275,31.3547  |  安徽省,芜湖市,118.4275502,31.35470362
--->
{"合肥市":[117.221753,31.82258054],
"芜湖市":[118.4275502,31.35470362]
}
'''
def csvToJson3():
    csv_in='E:/LcfSoftware/HtmlAjsWorks/EchartsUsing/2018out2334.csv'
    j_out_txt='E:/LcfSoftware/HtmlAjsWorks/provAndCity4.txt'

    out_f=open(j_out_txt,'w+')
    out_f.write('{')
    with open(csv_in,'r') as fi:
        ali=fi.readlines()
        for al in ali:
            a=al.split()
            b=a[0].split(',')
            b_len=len(b)
            if b_len==3:
                out_f.write('"'+b[0]+'":['+b[1]+','+b[2]+'],\n')
            elif b_len==4:
                out_f.write('"'+b[0]+'":['+b[1]+','+b[2]+'],\n')

                #out_f.write('"'+b[1]+'":['+b[2]+','+b[3]+'],\n')
            else:
                print(b)
    #最后的输出目前还需要一定的手动处理
    out_f.write('}')
    out_f.close()
    print('csvToJson3 done')

'''
city,nun,date
bj,5,201
hz,6,219
----->
{"city":["bj","hz"],"num":[5,6],"date":[201,219]}
'''
#用csv库实现
def rowColToDict(fname):
    import csv
    with open(fname, 'r', newline='') as csv_file:
        filereader = csv.reader(csv_file, delimiter=',')
        at_key=True  #刚读到首行
        for r_lst in filereader:
            if at_key: #循环在表的标题时
                d_key=r_lst
                l_k=len(d_key)
                d_val=[[] for i in range(l_k)]
                at_key=False
            else:
                for i in range(l_k):
                    d_val[i].append(r_lst[i])
            print(r_lst)        
        d_out={d_key[i]:d_val[i] for i in range(l_k)}
        print('转换后的字典:\n',d_out)
        #return d_out

def rowColToDictpd(fname): #用pandas库实现
    import pandas as pd
    dataf=pd.read_csv(fname)
    print(dataf)
    d_key=list(dataf.columns)
    # l_k=len(d_key)
    d_pd={} #d_pd=dict()
    for col in d_key:
        d_pd[col]=list(dataf.loc[:,col])
    print('转换后字典:\n',d_pd)
    #print(pd.DataFrame(d_pd)) #可以比较好地转换回dataframe格式，但是由于字典的无序，col排列顺序会变化
    
#这种方法因为pd读csv生成dataframe时，对于数字，会进行类型转换，所以获得的字典数据不都是字符串

f='./supplier_data.csv'
#rowColToDictpd(f)


#
csvToJson2()
#csvToJson3()