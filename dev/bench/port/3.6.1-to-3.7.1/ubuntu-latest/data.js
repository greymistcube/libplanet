window.BENCHMARK_DATA = {
  "lastUpdate": 1700489479910,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "f3f4e5b759618d4e75743079f96e9f52a5b3d858",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T18:51:01+09:00",
          "tree_id": "e33d04c7f511c4252489a6a9e0fc970da5173b30",
          "url": "https://github.com/greymistcube/libplanet/commit/f3f4e5b759618d4e75743079f96e9f52a5b3d858"
        },
        "date": 1700474592529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5759905.533333333,
            "unit": "ns",
            "range": "± 56442.08274716743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14868371.142857144,
            "unit": "ns",
            "range": "± 71194.18405006791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37383133.46666667,
            "unit": "ns",
            "range": "± 180660.1409200897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76413962.07142857,
            "unit": "ns",
            "range": "± 337069.6074847984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151075744.19230768,
            "unit": "ns",
            "range": "± 228196.06128662862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045681.3020833334,
            "unit": "ns",
            "range": "± 90621.28819684232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2038774.5615384616,
            "unit": "ns",
            "range": "± 95097.03210190055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1529732.0842696629,
            "unit": "ns",
            "range": "± 94579.4713295276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5717517.485714286,
            "unit": "ns",
            "range": "± 183176.10827856528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2595197.193548387,
            "unit": "ns",
            "range": "± 78867.01964971136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2646829.3444444444,
            "unit": "ns",
            "range": "± 91898.96688977016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3302761.3076923075,
            "unit": "ns",
            "range": "± 87452.11876485062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3167048.0816326533,
            "unit": "ns",
            "range": "± 118487.56619733649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6766445.551724138,
            "unit": "ns",
            "range": "± 159851.2530465178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42532.9375,
            "unit": "ns",
            "range": "± 4418.830242478444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3783054.5226004464,
            "unit": "ns",
            "range": "± 36665.251592918234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190634.3348858173,
            "unit": "ns",
            "range": "± 3418.959323289873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781748.7758463542,
            "unit": "ns",
            "range": "± 10824.459496062695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944451.8783052885,
            "unit": "ns",
            "range": "± 9933.939832330747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622891.9309082031,
            "unit": "ns",
            "range": "± 1120.073198570637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573497.3728966346,
            "unit": "ns",
            "range": "± 1715.646579165857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221000.5119047619,
            "unit": "ns",
            "range": "± 11360.947205646857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214415.2142857143,
            "unit": "ns",
            "range": "± 13363.640912969551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173105.39285714287,
            "unit": "ns",
            "range": "± 4873.578374590935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3156309.8,
            "unit": "ns",
            "range": "± 40277.39680231865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2946238.6428571427,
            "unit": "ns",
            "range": "± 36980.726389373616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18599.535353535353,
            "unit": "ns",
            "range": "± 4102.9993168590145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89598.36,
            "unit": "ns",
            "range": "± 13294.850839663035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100701.51111111112,
            "unit": "ns",
            "range": "± 3776.958183405254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74469.14285714286,
            "unit": "ns",
            "range": "± 26722.397905784044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2834.9347826086955,
            "unit": "ns",
            "range": "± 606.5631482729638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15228.857142857143,
            "unit": "ns",
            "range": "± 3047.6079414761434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "86ab4423f441b9207d73886941dca2c810502142",
          "message": "Changelog",
          "timestamp": "2023-11-20T18:53:37+09:00",
          "tree_id": "7b2d200491c069bfa925e051918907d9765d8cac",
          "url": "https://github.com/greymistcube/libplanet/commit/86ab4423f441b9207d73886941dca2c810502142"
        },
        "date": 1700474676458,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5729306.214285715,
            "unit": "ns",
            "range": "± 54967.86047553826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14269424.2,
            "unit": "ns",
            "range": "± 65390.10680873019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36315538.46666667,
            "unit": "ns",
            "range": "± 201396.54965120312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75625091.64285715,
            "unit": "ns",
            "range": "± 266213.3919227515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150942736.6,
            "unit": "ns",
            "range": "± 882193.1493109982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983493.9898989899,
            "unit": "ns",
            "range": "± 73582.65568351466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968040.217948718,
            "unit": "ns",
            "range": "± 100778.60280867545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1429584.2736842106,
            "unit": "ns",
            "range": "± 106311.0690261249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5642375.928571428,
            "unit": "ns",
            "range": "± 205024.10290421394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384123.3541666665,
            "unit": "ns",
            "range": "± 82258.01813365158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2631544.814285714,
            "unit": "ns",
            "range": "± 85331.2678991744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3189786.5862068967,
            "unit": "ns",
            "range": "± 64660.53204208513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3020169.47260274,
            "unit": "ns",
            "range": "± 144459.59224169963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6694856.451612903,
            "unit": "ns",
            "range": "± 204035.85718689067"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40785.22448979592,
            "unit": "ns",
            "range": "± 5671.398688882668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3755665.1373697915,
            "unit": "ns",
            "range": "± 5880.166642879481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1229695.1185396635,
            "unit": "ns",
            "range": "± 2069.6741527557842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782825.8722330729,
            "unit": "ns",
            "range": "± 16478.32894022432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934693.9015066964,
            "unit": "ns",
            "range": "± 4731.70361341237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638514.9266075721,
            "unit": "ns",
            "range": "± 816.8536109937519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564395.1891526442,
            "unit": "ns",
            "range": "± 3636.8894313100564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203260.57142857142,
            "unit": "ns",
            "range": "± 6669.544403197154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200812.9090909091,
            "unit": "ns",
            "range": "± 8718.03490336118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174151.70967741936,
            "unit": "ns",
            "range": "± 5276.457247014316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3187532.3846153845,
            "unit": "ns",
            "range": "± 32335.170249895757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2915109.6333333333,
            "unit": "ns",
            "range": "± 39407.48049159243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15636.642857142857,
            "unit": "ns",
            "range": "± 3584.2122062142553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72590.20103092784,
            "unit": "ns",
            "range": "± 7135.418022625098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90538.46153846153,
            "unit": "ns",
            "range": "± 1431.3531834936603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94663.96739130435,
            "unit": "ns",
            "range": "± 13289.338312314303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4534.616161616162,
            "unit": "ns",
            "range": "± 1560.9204617466587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20888.98,
            "unit": "ns",
            "range": "± 5951.999742858688"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "042a411a6c690539a60bf06b6782266d92b0912d",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T22:58:48+09:00",
          "tree_id": "f9aaad040af6fff0f596d095db3d0c052e4f5abf",
          "url": "https://github.com/greymistcube/libplanet/commit/042a411a6c690539a60bf06b6782266d92b0912d"
        },
        "date": 1700489395821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206150.72043010753,
            "unit": "ns",
            "range": "± 14803.325569647894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193861.06896551725,
            "unit": "ns",
            "range": "± 9984.003956088382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172780.375,
            "unit": "ns",
            "range": "± 3284.884713857297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3182759.769230769,
            "unit": "ns",
            "range": "± 29648.069178711135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2794919.3076923075,
            "unit": "ns",
            "range": "± 35644.835061535945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16080.452631578948,
            "unit": "ns",
            "range": "± 1872.486251225956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63881.5625,
            "unit": "ns",
            "range": "± 7270.401587131064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52879.651162790695,
            "unit": "ns",
            "range": "± 2887.0341529691673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95911.38659793814,
            "unit": "ns",
            "range": "± 12460.541422389693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4101.452631578947,
            "unit": "ns",
            "range": "± 1172.3109453210766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14162.938144329897,
            "unit": "ns",
            "range": "± 1930.212600630827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753865.8588541667,
            "unit": "ns",
            "range": "± 38663.04075845747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219759.846905048,
            "unit": "ns",
            "range": "± 1962.1261418183333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764551.6203425481,
            "unit": "ns",
            "range": "± 1298.4013389310323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927961.2356770833,
            "unit": "ns",
            "range": "± 5806.215683454434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608656.2490985577,
            "unit": "ns",
            "range": "± 1030.2446756802694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577307.4640299479,
            "unit": "ns",
            "range": "± 1108.2756702970369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41708.85106382979,
            "unit": "ns",
            "range": "± 5575.333484326338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2522262.736842105,
            "unit": "ns",
            "range": "± 85555.96250832653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2540344.653846154,
            "unit": "ns",
            "range": "± 62698.80666420522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3265946.7666666666,
            "unit": "ns",
            "range": "± 58412.085873273405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3026946.296296296,
            "unit": "ns",
            "range": "± 84270.53807178895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6758699.266666667,
            "unit": "ns",
            "range": "± 198935.6623492203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5690542.785714285,
            "unit": "ns",
            "range": "± 86031.56871322435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14402413.916666666,
            "unit": "ns",
            "range": "± 77954.86228518088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38013033.666666664,
            "unit": "ns",
            "range": "± 203657.13404344046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76331638.71428572,
            "unit": "ns",
            "range": "± 473701.9494556318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152526471.57142857,
            "unit": "ns",
            "range": "± 813612.437561286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974064.7444444444,
            "unit": "ns",
            "range": "± 71523.24035365545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1904827,
            "unit": "ns",
            "range": "± 78992.90893539414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1417799.4893617022,
            "unit": "ns",
            "range": "± 95265.89187681973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5718978.357142857,
            "unit": "ns",
            "range": "± 227736.80289288994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "4423414b6ac2e33ad562eb7eb03b11033eda8d11",
          "message": "Changelog",
          "timestamp": "2023-11-20T23:00:01+09:00",
          "tree_id": "acbf576ffed94e9f951fd1e72fa90f9712fea70c",
          "url": "https://github.com/greymistcube/libplanet/commit/4423414b6ac2e33ad562eb7eb03b11033eda8d11"
        },
        "date": 1700489472829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200254.55405405405,
            "unit": "ns",
            "range": "± 8835.354688389192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193289.26086956522,
            "unit": "ns",
            "range": "± 7314.846355748872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168483.27272727274,
            "unit": "ns",
            "range": "± 3487.795813456349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3098628.8571428573,
            "unit": "ns",
            "range": "± 25475.969747850748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2919513.285714286,
            "unit": "ns",
            "range": "± 36645.894861243585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16129.368131868132,
            "unit": "ns",
            "range": "± 1014.1211324622279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60636.50537634409,
            "unit": "ns",
            "range": "± 5175.393872059309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59223.9,
            "unit": "ns",
            "range": "± 7394.339395849376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67560.6105263158,
            "unit": "ns",
            "range": "± 9769.6628377707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2861.9,
            "unit": "ns",
            "range": "± 432.8082599577326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12849.684210526315,
            "unit": "ns",
            "range": "± 2415.866644477086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3766776.828125,
            "unit": "ns",
            "range": "± 45946.89008689515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215891.7190755208,
            "unit": "ns",
            "range": "± 7401.794534139327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769418.4290364584,
            "unit": "ns",
            "range": "± 1339.3253265613973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913956.1865234375,
            "unit": "ns",
            "range": "± 6258.578419480767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626543.529703776,
            "unit": "ns",
            "range": "± 2726.1107587258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571858.2904459635,
            "unit": "ns",
            "range": "± 2283.710365927683"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40288.16494845361,
            "unit": "ns",
            "range": "± 5156.644069144381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2442695.3571428573,
            "unit": "ns",
            "range": "± 79935.92189929854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2542425.9411764704,
            "unit": "ns",
            "range": "± 81527.79668502403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191435.3666666667,
            "unit": "ns",
            "range": "± 37673.24101660538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2966535.0454545454,
            "unit": "ns",
            "range": "± 109012.9031499663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6539550.764705882,
            "unit": "ns",
            "range": "± 206901.2138443396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5636781.076923077,
            "unit": "ns",
            "range": "± 33155.81583086527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14263722.3,
            "unit": "ns",
            "range": "± 77422.13800347141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36524290.961538464,
            "unit": "ns",
            "range": "± 170849.36650922225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74541516.5,
            "unit": "ns",
            "range": "± 706216.0056711511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149462803.7142857,
            "unit": "ns",
            "range": "± 974242.3559000903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956695.8548387097,
            "unit": "ns",
            "range": "± 67247.97727968982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1904488.6376811594,
            "unit": "ns",
            "range": "± 91141.81338973752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1400756.06185567,
            "unit": "ns",
            "range": "± 114236.85509390624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5729452.735955056,
            "unit": "ns",
            "range": "± 317052.98141642817"
          }
        ]
      }
    ]
  }
}