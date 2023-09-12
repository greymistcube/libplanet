window.BENCHMARK_DATA = {
  "lastUpdate": 1694495316332,
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
          "id": "4c727b97eb46a893a810b8db3570fa3ca521d994",
          "message": "Logging for trie set count",
          "timestamp": "2023-09-12T09:05:30+09:00",
          "tree_id": "c99165fc6bcea0ce8fc7832bb6306319b8b19f85",
          "url": "https://github.com/greymistcube/libplanet/commit/4c727b97eb46a893a810b8db3570fa3ca521d994"
        },
        "date": 1694478062155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7883834,
            "unit": "ns",
            "range": "± 94829.72383774434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19398361.6,
            "unit": "ns",
            "range": "± 338394.0534923323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46658367.11764706,
            "unit": "ns",
            "range": "± 918571.7304098984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91444050.53846154,
            "unit": "ns",
            "range": "± 830288.9068566852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189472884.85714287,
            "unit": "ns",
            "range": "± 1520368.483615826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53593.010869565216,
            "unit": "ns",
            "range": "± 5910.141528761425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303332.2021276596,
            "unit": "ns",
            "range": "± 21746.19806720384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292161.47826086957,
            "unit": "ns",
            "range": "± 18570.26574012507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290908.8360655738,
            "unit": "ns",
            "range": "± 13110.487739694416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4171561.285714286,
            "unit": "ns",
            "range": "± 116484.71467165797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3690979.6,
            "unit": "ns",
            "range": "± 95096.50425050684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18142.922222222223,
            "unit": "ns",
            "range": "± 1401.6988567070612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83545.26595744681,
            "unit": "ns",
            "range": "± 7378.348049479554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80724.90322580645,
            "unit": "ns",
            "range": "± 9085.579172111533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89359.36734693877,
            "unit": "ns",
            "range": "± 13748.703312532285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5338.5053763440865,
            "unit": "ns",
            "range": "± 678.0824725980564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17359.31868131868,
            "unit": "ns",
            "range": "± 1556.3776097015993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525300.1041666667,
            "unit": "ns",
            "range": "± 222711.73538774424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711717.947761194,
            "unit": "ns",
            "range": "± 127041.80163658416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891583.193877551,
            "unit": "ns",
            "range": "± 181785.41437417036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5055021.775,
            "unit": "ns",
            "range": "± 168982.74811694006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3052968.625,
            "unit": "ns",
            "range": "± 56478.44016717058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132863.125,
            "unit": "ns",
            "range": "± 95349.76075100657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4359754.346153846,
            "unit": "ns",
            "range": "± 148649.38430299642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3727246.6739130435,
            "unit": "ns",
            "range": "± 134603.2475283159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6620387.489795919,
            "unit": "ns",
            "range": "± 260920.85550021377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5081445.378645834,
            "unit": "ns",
            "range": "± 48985.28269225281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1810648.1828125,
            "unit": "ns",
            "range": "± 29484.72072715409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002287.51640625,
            "unit": "ns",
            "range": "± 10327.679540339008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2436250.874739583,
            "unit": "ns",
            "range": "± 12425.759328665847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 769456.3376302083,
            "unit": "ns",
            "range": "± 9666.71835310805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805704.5587239583,
            "unit": "ns",
            "range": "± 5599.554114190007"
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
          "id": "20b51fbe6b5f0901c4560954b6cbca632d14f0c9",
          "message": "Added ITrie cache",
          "timestamp": "2023-09-12T11:11:33+09:00",
          "tree_id": "845985624c70aabe29a5e774c37bc74bd9e76331",
          "url": "https://github.com/greymistcube/libplanet/commit/20b51fbe6b5f0901c4560954b6cbca632d14f0c9"
        },
        "date": 1694485860608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8420268.736842105,
            "unit": "ns",
            "range": "± 173929.8116395877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20530766.94117647,
            "unit": "ns",
            "range": "± 661742.6220242366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51838995.222222224,
            "unit": "ns",
            "range": "± 1630200.2187811972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108779180.91860466,
            "unit": "ns",
            "range": "± 4032276.1685355906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224735955.94444445,
            "unit": "ns",
            "range": "± 8465697.453632843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67741.40860215054,
            "unit": "ns",
            "range": "± 9255.00736879485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354661.97826086957,
            "unit": "ns",
            "range": "± 50357.72010207216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330905.8617021277,
            "unit": "ns",
            "range": "± 37315.30018922334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313511.25274725276,
            "unit": "ns",
            "range": "± 24160.074165446047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4248433.215789474,
            "unit": "ns",
            "range": "± 242789.99461817808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795057.434782609,
            "unit": "ns",
            "range": "± 181875.62227760765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21386.340425531915,
            "unit": "ns",
            "range": "± 3403.1548568407125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98132.08333333333,
            "unit": "ns",
            "range": "± 17283.332489739278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82843.05319148937,
            "unit": "ns",
            "range": "± 9985.736870486955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98616.30412371134,
            "unit": "ns",
            "range": "± 17311.56265731999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7449.239583333333,
            "unit": "ns",
            "range": "± 1264.6069973652234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26345,
            "unit": "ns",
            "range": "± 4216.2188654652855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1903736.347826087,
            "unit": "ns",
            "range": "± 358001.87575593486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3435320.0454545454,
            "unit": "ns",
            "range": "± 527087.2529668895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2302559.5,
            "unit": "ns",
            "range": "± 458180.2148830717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6026069.032608695,
            "unit": "ns",
            "range": "± 747811.5273812029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3541615.96875,
            "unit": "ns",
            "range": "± 300937.78654025216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3737159.139784946,
            "unit": "ns",
            "range": "± 335333.96555661625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4483668.522988506,
            "unit": "ns",
            "range": "± 238830.96336627833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4150598.8191489363,
            "unit": "ns",
            "range": "± 368213.0699285595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7342449.724489796,
            "unit": "ns",
            "range": "± 654585.1282593422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5939376.418526785,
            "unit": "ns",
            "range": "± 167082.8673924112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1727084.7424172794,
            "unit": "ns",
            "range": "± 34739.91284530072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1032454.9798177084,
            "unit": "ns",
            "range": "± 18822.275905133258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2762472.676957325,
            "unit": "ns",
            "range": "± 156267.5796149269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832374.6965519831,
            "unit": "ns",
            "range": "± 21922.012026849032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755641.3916730183,
            "unit": "ns",
            "range": "± 26928.66462089297"
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
          "id": "504b445d22fbd2db3a1fe516d0389a994d698f35",
          "message": "Cache logging",
          "timestamp": "2023-09-12T13:49:30+09:00",
          "tree_id": "c658c5d4c27b8b7df04d8333f3413e60b811422f",
          "url": "https://github.com/greymistcube/libplanet/commit/504b445d22fbd2db3a1fe516d0389a994d698f35"
        },
        "date": 1694495302002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8222662.1707317075,
            "unit": "ns",
            "range": "± 432108.97439559305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20718485.217391305,
            "unit": "ns",
            "range": "± 793577.8917931094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53937207.708333336,
            "unit": "ns",
            "range": "± 1383144.9711407218"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98929902.42857143,
            "unit": "ns",
            "range": "± 646979.8638011154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200004511.7857143,
            "unit": "ns",
            "range": "± 1851680.5336037597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69562.93548387097,
            "unit": "ns",
            "range": "± 11842.257567716564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297344.33516483515,
            "unit": "ns",
            "range": "± 22292.773193353605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285928.86813186813,
            "unit": "ns",
            "range": "± 20159.873893018714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278606.3829787234,
            "unit": "ns",
            "range": "± 18672.93243717663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4220978.479166667,
            "unit": "ns",
            "range": "± 244843.98980321627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3661878,
            "unit": "ns",
            "range": "± 163187.83085653483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20494.5,
            "unit": "ns",
            "range": "± 4048.2692936850863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88274.9255319149,
            "unit": "ns",
            "range": "± 11980.270603186631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77557.28571428571,
            "unit": "ns",
            "range": "± 3561.5118426856397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94965.83333333333,
            "unit": "ns",
            "range": "± 14455.284652054757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5948.436170212766,
            "unit": "ns",
            "range": "± 1279.6173366049763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18679.31111111111,
            "unit": "ns",
            "range": "± 3305.8303675440275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619814.7268041237,
            "unit": "ns",
            "range": "± 238609.33933098443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2952912.737373737,
            "unit": "ns",
            "range": "± 199061.76706277582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1974612.90625,
            "unit": "ns",
            "range": "± 160388.03681801984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5781333.530612245,
            "unit": "ns",
            "range": "± 439289.62436373683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228125.1379310344,
            "unit": "ns",
            "range": "± 141324.32328832036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511525.288235294,
            "unit": "ns",
            "range": "± 188427.40182337334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4505577.99,
            "unit": "ns",
            "range": "± 282217.2871615024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021660.7032967033,
            "unit": "ns",
            "range": "± 715996.0502778628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6630339.528301887,
            "unit": "ns",
            "range": "± 272558.7737357411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6464492.528645833,
            "unit": "ns",
            "range": "± 389211.3710566518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866761.2846354167,
            "unit": "ns",
            "range": "± 25509.26475535918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1030558.0453725961,
            "unit": "ns",
            "range": "± 11581.312898692519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854093.1945703123,
            "unit": "ns",
            "range": "± 185643.49900808153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784165.5708007812,
            "unit": "ns",
            "range": "± 4869.271816765415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717665.1363002232,
            "unit": "ns",
            "range": "± 5834.755363299872"
          }
        ]
      }
    ]
  }
}