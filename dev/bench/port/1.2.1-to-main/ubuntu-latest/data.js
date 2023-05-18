window.BENCHMARK_DATA = {
  "lastUpdate": 1684394709264,
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
          "id": "146c3cce8685b6fddd790da5468455850ea6d7e8",
          "message": "Port 1.2.1 to main",
          "timestamp": "2023-05-18T11:19:38+09:00",
          "tree_id": "bea99444bda741c3202cf1b8d0c83d398b176647",
          "url": "https://github.com/greymistcube/libplanet/commit/146c3cce8685b6fddd790da5468455850ea6d7e8"
        },
        "date": 1684377149380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387485.222222222,
            "unit": "ns",
            "range": "± 63735.735718627824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536415.911764706,
            "unit": "ns",
            "range": "± 113790.70650164492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4346619.95,
            "unit": "ns",
            "range": "± 153766.8154008213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4364846.927536231,
            "unit": "ns",
            "range": "± 199595.9474836394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7080064.12,
            "unit": "ns",
            "range": "± 183398.80776859846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283453.0909090909,
            "unit": "ns",
            "range": "± 10398.833851923755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278567.2068965517,
            "unit": "ns",
            "range": "± 11488.132677358108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241776.07142857142,
            "unit": "ns",
            "range": "± 4151.091505473372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4344532.714285715,
            "unit": "ns",
            "range": "± 48199.02347626904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4028603.3333333335,
            "unit": "ns",
            "range": "± 68322.33358831049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19738.68085106383,
            "unit": "ns",
            "range": "± 1351.1595674155676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89245.82954545454,
            "unit": "ns",
            "range": "± 4748.606319974898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80845.86301369863,
            "unit": "ns",
            "range": "± 4022.3094848712517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94471.04081632652,
            "unit": "ns",
            "range": "± 10153.147855702691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5427.114583333333,
            "unit": "ns",
            "range": "± 716.3608598110999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19186.521276595744,
            "unit": "ns",
            "range": "± 1407.6372159759428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5931080.022916666,
            "unit": "ns",
            "range": "± 38028.66657074794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1842209.8490513393,
            "unit": "ns",
            "range": "± 3639.701714168049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346695.3131510417,
            "unit": "ns",
            "range": "± 5603.007351714531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623387.823958333,
            "unit": "ns",
            "range": "± 3213.467527008757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823048.7511067708,
            "unit": "ns",
            "range": "± 1453.0428327604827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755227.2292317708,
            "unit": "ns",
            "range": "± 347.928437204284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7967096.586206896,
            "unit": "ns",
            "range": "± 230457.95558990756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21721328.6,
            "unit": "ns",
            "range": "± 288400.8645788507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53062472.5,
            "unit": "ns",
            "range": "± 353909.804915092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110096029.86666666,
            "unit": "ns",
            "range": "± 821506.4452025982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206357843.2857143,
            "unit": "ns",
            "range": "± 1970442.4489888414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436166.3333333333,
            "unit": "ns",
            "range": "± 79512.55330535979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813788.3214285714,
            "unit": "ns",
            "range": "± 80223.31170853924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2339658.4578313255,
            "unit": "ns",
            "range": "± 117897.85004031794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5773362.363636363,
            "unit": "ns",
            "range": "± 242162.88844099862"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50558.913043478264,
            "unit": "ns",
            "range": "± 2446.1848611011205"
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
          "id": "19998f55f162a4cda3168a217b9525eaebb87fe4",
          "message": "Release 1.2.1",
          "timestamp": "2023-05-18T16:12:09+09:00",
          "tree_id": "5517a11650a6fc3a987f8b4384c06d83993e8e07",
          "url": "https://github.com/greymistcube/libplanet/commit/19998f55f162a4cda3168a217b9525eaebb87fe4"
        },
        "date": 1684394701587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3372960.7,
            "unit": "ns",
            "range": "± 91915.77599203111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516310.8125,
            "unit": "ns",
            "range": "± 67424.63674475747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4375138.368421053,
            "unit": "ns",
            "range": "± 96889.70544743161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4343187.621621622,
            "unit": "ns",
            "range": "± 141114.48827328338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6780853.807692308,
            "unit": "ns",
            "range": "± 121805.6075070501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284137.5094339623,
            "unit": "ns",
            "range": "± 11166.812927018374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267493.71428571426,
            "unit": "ns",
            "range": "± 8406.37588537013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229592.92307692306,
            "unit": "ns",
            "range": "± 4515.262622909786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4243212.923076923,
            "unit": "ns",
            "range": "± 13530.365235656294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3851778.3333333335,
            "unit": "ns",
            "range": "± 42159.261313782634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18457.510638297874,
            "unit": "ns",
            "range": "± 1448.9822289750864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89284.40243902439,
            "unit": "ns",
            "range": "± 4649.996245477725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74074.63414634146,
            "unit": "ns",
            "range": "± 2674.5818809310886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89733.26595744681,
            "unit": "ns",
            "range": "± 9624.562665305813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4730.927835051546,
            "unit": "ns",
            "range": "± 534.1193735061845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17784.440860215054,
            "unit": "ns",
            "range": "± 1268.8915435063238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5860637.7171875,
            "unit": "ns",
            "range": "± 19885.78581418305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821624.6015625,
            "unit": "ns",
            "range": "± 690.7732393909502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347280.7217447916,
            "unit": "ns",
            "range": "± 1903.314730563191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605624.275260417,
            "unit": "ns",
            "range": "± 1473.9074493901942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799881.7397135417,
            "unit": "ns",
            "range": "± 466.1087133109799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735663.5330729167,
            "unit": "ns",
            "range": "± 435.193072769059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7602516.666666667,
            "unit": "ns",
            "range": "± 35629.41862656009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19652010.714285713,
            "unit": "ns",
            "range": "± 79993.43444349627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50085089.6,
            "unit": "ns",
            "range": "± 243516.07478850344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99916815.15384616,
            "unit": "ns",
            "range": "± 346814.2442294929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200008615.14285713,
            "unit": "ns",
            "range": "± 796982.7962624322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408696.1515151516,
            "unit": "ns",
            "range": "± 99960.53745459505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2722642.2045454546,
            "unit": "ns",
            "range": "± 102077.72881202983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223443.9583333335,
            "unit": "ns",
            "range": "± 127446.49879099253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5282126.481481481,
            "unit": "ns",
            "range": "± 147368.5004243993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45137.20224719101,
            "unit": "ns",
            "range": "± 2499.204951669518"
          }
        ]
      }
    ]
  }
}