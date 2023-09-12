window.BENCHMARK_DATA = {
  "lastUpdate": 1694541578375,
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
          "id": "5ee9a61bb2c168b668a1476ab2627077416c6aab",
          "message": "More frequent commit",
          "timestamp": "2023-09-13T02:17:25+09:00",
          "tree_id": "0d27962a23c81d8e4a27bced338a254d85f8f4c2",
          "url": "https://github.com/greymistcube/libplanet/commit/5ee9a61bb2c168b668a1476ab2627077416c6aab"
        },
        "date": 1694541564013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8924878.75510204,
            "unit": "ns",
            "range": "± 521397.35877107177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21748023.266666666,
            "unit": "ns",
            "range": "± 964110.2231301302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52678439.35714286,
            "unit": "ns",
            "range": "± 912242.8046009089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112006844.3125,
            "unit": "ns",
            "range": "± 2067476.3805388513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226990216.22727272,
            "unit": "ns",
            "range": "± 5289545.080313312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70624.5,
            "unit": "ns",
            "range": "± 10422.720211747006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322661.7842105263,
            "unit": "ns",
            "range": "± 24726.97532098797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310031.4347826087,
            "unit": "ns",
            "range": "± 20884.384203685022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278461.99,
            "unit": "ns",
            "range": "± 18453.941762551887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985661.533333333,
            "unit": "ns",
            "range": "± 72743.60825811107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751180.3928571427,
            "unit": "ns",
            "range": "± 89534.88022711815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19264.301075268817,
            "unit": "ns",
            "range": "± 2906.5489838165327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100032.95698924731,
            "unit": "ns",
            "range": "± 20767.607137451374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115316.47872340426,
            "unit": "ns",
            "range": "± 22279.46659837584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90207.33333333333,
            "unit": "ns",
            "range": "± 9998.418308245893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5460.978723404255,
            "unit": "ns",
            "range": "± 1410.630477349919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17047.467032967033,
            "unit": "ns",
            "range": "± 1042.697819766371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1505275.1326530613,
            "unit": "ns",
            "range": "± 172207.79635012383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2932282.904761905,
            "unit": "ns",
            "range": "± 105205.38769005654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1835498.3695652173,
            "unit": "ns",
            "range": "± 158174.83667220743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6444433.683673469,
            "unit": "ns",
            "range": "± 644474.9787625279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373697.18556701,
            "unit": "ns",
            "range": "± 225533.31160003328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3558543.52020202,
            "unit": "ns",
            "range": "± 305970.07817728835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4610627.162162162,
            "unit": "ns",
            "range": "± 230995.44129862677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3767838.78125,
            "unit": "ns",
            "range": "± 220286.11935333477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7891953.278947368,
            "unit": "ns",
            "range": "± 581613.0866691833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6060902.6475033965,
            "unit": "ns",
            "range": "± 339491.8643153194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1672657.4967912945,
            "unit": "ns",
            "range": "± 12636.667122765923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023201.970703125,
            "unit": "ns",
            "range": "± 20595.9147012366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2877749.9906154727,
            "unit": "ns",
            "range": "± 151629.22017902587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851407.4217122396,
            "unit": "ns",
            "range": "± 5741.342020826616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749689.4390625,
            "unit": "ns",
            "range": "± 12341.956108049573"
          }
        ]
      }
    ]
  }
}