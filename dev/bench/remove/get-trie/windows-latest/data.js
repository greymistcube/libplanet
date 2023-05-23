window.BENCHMARK_DATA = {
  "lastUpdate": 1684817541287,
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
          "id": "1359ce47893455262fa503398dc5a6fead7207d6",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-16T14:20:38+09:00",
          "tree_id": "d29b7d716f0b5b86b82d1b4a4e81ddca913e0a39",
          "url": "https://github.com/greymistcube/libplanet/commit/1359ce47893455262fa503398dc5a6fead7207d6"
        },
        "date": 1684217866272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447191,
            "unit": "ns",
            "range": "± 122112.76796469728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602254.2372881356,
            "unit": "ns",
            "range": "± 114749.38257220096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2184987.912087912,
            "unit": "ns",
            "range": "± 127176.52022564266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5533319.191919192,
            "unit": "ns",
            "range": "± 344800.29318278166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51310.75268817204,
            "unit": "ns",
            "range": "± 3679.894326388929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7024771.428571428,
            "unit": "ns",
            "range": "± 109847.66674859276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19834900,
            "unit": "ns",
            "range": "± 236338.02970684657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49678697.82608695,
            "unit": "ns",
            "range": "± 1234887.9908240354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100669576.66666667,
            "unit": "ns",
            "range": "± 1623615.7341240686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201297593.33333334,
            "unit": "ns",
            "range": "± 2731886.0362307173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4977097.5,
            "unit": "ns",
            "range": "± 19925.614775468912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527184.7916666667,
            "unit": "ns",
            "range": "± 5642.9104882881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168972.7473958333,
            "unit": "ns",
            "range": "± 5761.456370703097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628438.6848958335,
            "unit": "ns",
            "range": "± 5443.264980381457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852890.390625,
            "unit": "ns",
            "range": "± 2755.759366936657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780550.9440104166,
            "unit": "ns",
            "range": "± 3021.652811479694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3135896.296296296,
            "unit": "ns",
            "range": "± 85199.97960220721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3430150,
            "unit": "ns",
            "range": "± 66134.02553401186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4097691.1764705884,
            "unit": "ns",
            "range": "± 131419.22595301314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4105013.095238095,
            "unit": "ns",
            "range": "± 204478.97631335966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6765395.454545454,
            "unit": "ns",
            "range": "± 252469.54682076332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272178.26086956525,
            "unit": "ns",
            "range": "± 10370.533320550925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261023.4375,
            "unit": "ns",
            "range": "± 12087.67891891679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235128,
            "unit": "ns",
            "range": "± 17635.57630232569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4057459.090909091,
            "unit": "ns",
            "range": "± 95221.59448505919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3663626.3157894737,
            "unit": "ns",
            "range": "± 79845.0641493001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20513.40206185567,
            "unit": "ns",
            "range": "± 1944.9522737278255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95437.62886597938,
            "unit": "ns",
            "range": "± 7317.505519471194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80053.76344086022,
            "unit": "ns",
            "range": "± 5941.500307157549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108546.73913043478,
            "unit": "ns",
            "range": "± 11749.22444096487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6521.428571428572,
            "unit": "ns",
            "range": "± 1159.385724309196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20552.577319587628,
            "unit": "ns",
            "range": "± 2111.431819855168"
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
          "id": "a4f2967e88352c699eaa3d23f316b2779c501df9",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-19T14:51:21+09:00",
          "tree_id": "4061793da82e54481b786ed4c3368e87683fc4a6",
          "url": "https://github.com/greymistcube/libplanet/commit/a4f2967e88352c699eaa3d23f316b2779c501df9"
        },
        "date": 1684476712689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780969.7916666667,
            "unit": "ns",
            "range": "± 177861.7891094636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3454802.1052631577,
            "unit": "ns",
            "range": "± 286411.30593210435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2851113.6842105263,
            "unit": "ns",
            "range": "± 247427.50780634905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7333811.340206185,
            "unit": "ns",
            "range": "± 565092.1639203881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63163.15789473684,
            "unit": "ns",
            "range": "± 12107.559205785969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9530776.923076924,
            "unit": "ns",
            "range": "± 388989.03236486093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26037500,
            "unit": "ns",
            "range": "± 587322.6013018739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68305497.56097561,
            "unit": "ns",
            "range": "± 2429927.266965804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134855070.37037036,
            "unit": "ns",
            "range": "± 3721722.992297521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265722079.16666666,
            "unit": "ns",
            "range": "± 6628276.442306405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6193700.892857143,
            "unit": "ns",
            "range": "± 75191.06840411639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971043.4988839286,
            "unit": "ns",
            "range": "± 21409.08136290627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1504715.4817708333,
            "unit": "ns",
            "range": "± 20738.393973179467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3317383.75,
            "unit": "ns",
            "range": "± 55753.30385022212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1090476.060267857,
            "unit": "ns",
            "range": "± 15833.56165323986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1020264.5883413461,
            "unit": "ns",
            "range": "± 14185.533778278505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4127051.5463917525,
            "unit": "ns",
            "range": "± 322253.18142772786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4262206.12244898,
            "unit": "ns",
            "range": "± 392381.30277353036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5561734.065934066,
            "unit": "ns",
            "range": "± 309073.79924893886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5228288.421052632,
            "unit": "ns",
            "range": "± 367958.0422031138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8905580.76923077,
            "unit": "ns",
            "range": "± 367727.8090975857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339813.04347826086,
            "unit": "ns",
            "range": "± 35225.39424089757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327083.87096774194,
            "unit": "ns",
            "range": "± 33907.74020371013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299782.97872340423,
            "unit": "ns",
            "range": "± 37464.86135291428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5185329.166666667,
            "unit": "ns",
            "range": "± 315347.92979273136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4713954.87804878,
            "unit": "ns",
            "range": "± 247508.06753402884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26962.886597938144,
            "unit": "ns",
            "range": "± 7618.690279881182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105109.5744680851,
            "unit": "ns",
            "range": "± 16477.609892638095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119168.47826086957,
            "unit": "ns",
            "range": "± 23882.334863617994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148240.20618556702,
            "unit": "ns",
            "range": "± 29427.023648177164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8619.101123595505,
            "unit": "ns",
            "range": "± 1967.859728261229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23137.63440860215,
            "unit": "ns",
            "range": "± 5550.086446222465"
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
          "id": "de796c4ef8b5dd8b90fe38f65ea286a317a50691",
          "message": "Removed GetTrie() from IBlockChainStates",
          "timestamp": "2023-05-22T15:43:56+09:00",
          "tree_id": "bee4d0382e92e19e6e286d92853212f699710ced",
          "url": "https://github.com/greymistcube/libplanet/commit/de796c4ef8b5dd8b90fe38f65ea286a317a50691"
        },
        "date": 1684739026725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636132.7956989247,
            "unit": "ns",
            "range": "± 169619.8675963504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2974918.556701031,
            "unit": "ns",
            "range": "± 337790.6456328562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2574380.2083333335,
            "unit": "ns",
            "range": "± 292017.58008354716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6453788.659793815,
            "unit": "ns",
            "range": "± 670320.5560706708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58495.78947368421,
            "unit": "ns",
            "range": "± 7835.379606134501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8505350,
            "unit": "ns",
            "range": "± 679595.4923683814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23675968.292682927,
            "unit": "ns",
            "range": "± 838663.1419822336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61034510.256410256,
            "unit": "ns",
            "range": "± 3049543.0588770816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122596287.63440861,
            "unit": "ns",
            "range": "± 6789372.462947769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235423270.21276596,
            "unit": "ns",
            "range": "± 13402533.983877664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5938749.0625,
            "unit": "ns",
            "range": "± 208136.4600269059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1908187.03125,
            "unit": "ns",
            "range": "± 28025.37688846665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387348.9440917969,
            "unit": "ns",
            "range": "± 43051.45204903294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032573.9453125,
            "unit": "ns",
            "range": "± 60374.97122183383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 990490.6555175781,
            "unit": "ns",
            "range": "± 18742.21777128335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926292.333984375,
            "unit": "ns",
            "range": "± 17925.596999331436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3665466.3157894737,
            "unit": "ns",
            "range": "± 244699.08990019627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3820057.6086956523,
            "unit": "ns",
            "range": "± 359983.96888411493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4856877.659574468,
            "unit": "ns",
            "range": "± 344505.0918531438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5028275.510204081,
            "unit": "ns",
            "range": "± 375637.3868564951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8167618.947368421,
            "unit": "ns",
            "range": "± 565701.3352476797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301090.4761904762,
            "unit": "ns",
            "range": "± 12792.383246464437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297162.22222222225,
            "unit": "ns",
            "range": "± 17595.93018431211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290185.10638297873,
            "unit": "ns",
            "range": "± 20531.38016534537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5143126.666666667,
            "unit": "ns",
            "range": "± 366993.01161334635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4456561.176470588,
            "unit": "ns",
            "range": "± 236691.83355162048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22584.848484848484,
            "unit": "ns",
            "range": "± 5096.804994335009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95352.57731958762,
            "unit": "ns",
            "range": "± 10187.37057978637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92280.41237113402,
            "unit": "ns",
            "range": "± 17024.58173235137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121253.125,
            "unit": "ns",
            "range": "± 21245.61851114372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11544.444444444445,
            "unit": "ns",
            "range": "± 5957.04388787645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22934,
            "unit": "ns",
            "range": "± 6577.958603848111"
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
          "id": "6fab979fdb8626efa9b936bc241a094567e3cdb4",
          "message": "Changelog",
          "timestamp": "2023-05-23T13:35:11+09:00",
          "tree_id": "da042206413c57363960d8c6c198281d7f229509",
          "url": "https://github.com/greymistcube/libplanet/commit/6fab979fdb8626efa9b936bc241a094567e3cdb4"
        },
        "date": 1684817519141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391004.1237113401,
            "unit": "ns",
            "range": "± 106478.38387587346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2619166.6666666665,
            "unit": "ns",
            "range": "± 145595.9878753301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2170120,
            "unit": "ns",
            "range": "± 117204.39695961353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5461514.444444444,
            "unit": "ns",
            "range": "± 302826.62951237086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50886.51685393258,
            "unit": "ns",
            "range": "± 2794.157500735644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7022260,
            "unit": "ns",
            "range": "± 68666.97896369113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19191371.42857143,
            "unit": "ns",
            "range": "± 267623.90783328016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49570433.333333336,
            "unit": "ns",
            "range": "± 761644.6506143949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98355923.52941176,
            "unit": "ns",
            "range": "± 1942912.8761763263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196223753.33333334,
            "unit": "ns",
            "range": "± 3369655.214848009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4870234.104567308,
            "unit": "ns",
            "range": "± 33741.70298200658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1545132.3939732143,
            "unit": "ns",
            "range": "± 7658.012447560316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1193498.6478365385,
            "unit": "ns",
            "range": "± 8963.670512620498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678295.859375,
            "unit": "ns",
            "range": "± 33091.08143596974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824684.7806490385,
            "unit": "ns",
            "range": "± 3300.7752003742353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766144.8392427885,
            "unit": "ns",
            "range": "± 1491.5668419584358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147842.1052631577,
            "unit": "ns",
            "range": "± 107378.21922073232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3275483.6363636362,
            "unit": "ns",
            "range": "± 137664.06745412352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4094275.6756756757,
            "unit": "ns",
            "range": "± 138230.6635169503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4322474.074074074,
            "unit": "ns",
            "range": "± 119713.10767058113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6814791.891891892,
            "unit": "ns",
            "range": "± 228168.70388471868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275766.6666666667,
            "unit": "ns",
            "range": "± 6386.644719195735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256552,
            "unit": "ns",
            "range": "± 10352.998973973776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233441.23711340205,
            "unit": "ns",
            "range": "± 15483.490889340004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3932866.6666666665,
            "unit": "ns",
            "range": "± 73082.61144238139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3688837.5,
            "unit": "ns",
            "range": "± 67280.8429891699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21289.79591836735,
            "unit": "ns",
            "range": "± 2677.531167661284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89522.82608695653,
            "unit": "ns",
            "range": "± 5939.439853354834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75994.89795918367,
            "unit": "ns",
            "range": "± 5443.280591493309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107238.54166666667,
            "unit": "ns",
            "range": "± 13375.125142880694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6185.106382978724,
            "unit": "ns",
            "range": "± 1070.2182921544768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22169.14893617021,
            "unit": "ns",
            "range": "± 2057.3642494703886"
          }
        ]
      }
    ]
  }
}