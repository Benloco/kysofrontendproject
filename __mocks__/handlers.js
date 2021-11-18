import {rest} from 'msw';
import {baseUrl} from  '../baseurl'
import {Mockdata} from './reportMock'

export const handlers=[
    rest.get(baseUrl+'reports/bjdtphxCMw',(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(Mockdata.reports),
            ctx.delay(150)
        )
    }),

    rest.get(baseUrl+'social/bjdtphxCMw',(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(Mockdata.social),
            ctx.delay(150)
        )
    }),
    rest.put(baseUrl+'social/bjdtphxCMw',(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json(),
            ctx.delay(150)
        )
    })
]



export const tasksHandlerException = rest.get(
    baseUrl+'reports/bjdtphxCMw',
    async (req, res, ctx) =>
      res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
  );
  