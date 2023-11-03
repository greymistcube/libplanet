window.BENCHMARK_DATA = {
  "lastUpdate": 1698993228450,
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
          "id": "3cf2b69679f69efe3e013b93a465dfa18cd823eb",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T11:30:24+09:00",
          "tree_id": "433e7e18bf05b1ccd8d1d5fc493971275c2c56c6",
          "url": "https://github.com/greymistcube/libplanet/commit/3cf2b69679f69efe3e013b93a465dfa18cd823eb"
        },
        "date": 1698979884176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9247848.333333334,
            "unit": "ns",
            "range": "± 802111.003608781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22155082.881818183,
            "unit": "ns",
            "range": "± 940127.497346848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54648427.85185185,
            "unit": "ns",
            "range": "± 1523994.95950208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110956665.75,
            "unit": "ns",
            "range": "± 3119935.282477395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223170496.20588234,
            "unit": "ns",
            "range": "± 7114203.1753524635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78415.70238095238,
            "unit": "ns",
            "range": "± 7471.918901258379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341772.53225806454,
            "unit": "ns",
            "range": "± 43263.398963550964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335468.4210526316,
            "unit": "ns",
            "range": "± 37216.847792758315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333269.1208791209,
            "unit": "ns",
            "range": "± 34856.83637739922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4345335.066666666,
            "unit": "ns",
            "range": "± 192859.60611898065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4119621.1631578947,
            "unit": "ns",
            "range": "± 326962.31237516523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25999.1935483871,
            "unit": "ns",
            "range": "± 3684.818594018909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113691.51086956522,
            "unit": "ns",
            "range": "± 14485.264011518639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120966.1914893617,
            "unit": "ns",
            "range": "± 14944.998222533843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119936.48888888888,
            "unit": "ns",
            "range": "± 13673.982002652481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9141.532608695652,
            "unit": "ns",
            "range": "± 1096.9866162755247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25988.06043956044,
            "unit": "ns",
            "range": "± 4515.157694326944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704743.2626262626,
            "unit": "ns",
            "range": "± 278369.3217491345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3237096.9574468085,
            "unit": "ns",
            "range": "± 336323.1087310449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2721561.994736842,
            "unit": "ns",
            "range": "± 382848.76797311124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12398669.235955056,
            "unit": "ns",
            "range": "± 2094637.020846024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3599634.173469388,
            "unit": "ns",
            "range": "± 336581.0270491557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3681606.355670103,
            "unit": "ns",
            "range": "± 308451.77932478325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4737911.71875,
            "unit": "ns",
            "range": "± 402117.2733088459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4590663.319587629,
            "unit": "ns",
            "range": "± 398121.1429583324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16392105.835164836,
            "unit": "ns",
            "range": "± 2940761.1268841205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5913662.237132353,
            "unit": "ns",
            "range": "± 116567.5553774511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922408.0082194011,
            "unit": "ns",
            "range": "± 75831.20135000591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175100.0423943014,
            "unit": "ns",
            "range": "± 23526.790307462434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3075543.399325284,
            "unit": "ns",
            "range": "± 144545.67141140168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925189.9788411459,
            "unit": "ns",
            "range": "± 8574.458212758986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876493.0386328124,
            "unit": "ns",
            "range": "± 23318.172584951535"
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1698993213513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8206327.769230769,
            "unit": "ns",
            "range": "± 86473.3276557516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20338159.423076924,
            "unit": "ns",
            "range": "± 265279.20084521687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50181750.78571428,
            "unit": "ns",
            "range": "± 356532.4404224192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100814192.64705883,
            "unit": "ns",
            "range": "± 2030601.0623165846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202740957.98333332,
            "unit": "ns",
            "range": "± 8956647.746306341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51530.16842105263,
            "unit": "ns",
            "range": "± 12846.781009722166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235817.83516483515,
            "unit": "ns",
            "range": "± 15854.734676825326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235414.76136363635,
            "unit": "ns",
            "range": "± 19274.923694405556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221475.74489795917,
            "unit": "ns",
            "range": "± 21582.214991501838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3888003.476190476,
            "unit": "ns",
            "range": "± 141298.3411958779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3487717.772727273,
            "unit": "ns",
            "range": "± 83482.24926518487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18026.969696969696,
            "unit": "ns",
            "range": "± 4101.835339471049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78576.41,
            "unit": "ns",
            "range": "± 17016.50644455779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84596.29545454546,
            "unit": "ns",
            "range": "± 13206.425807210611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74918.54639175258,
            "unit": "ns",
            "range": "± 15183.990676189054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5538.742268041237,
            "unit": "ns",
            "range": "± 1999.5230695840867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17499.067010309278,
            "unit": "ns",
            "range": "± 4030.797491158999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1153112.868131868,
            "unit": "ns",
            "range": "± 89247.44479083717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2397066.673076923,
            "unit": "ns",
            "range": "± 98268.10520218796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1805391.01010101,
            "unit": "ns",
            "range": "± 165697.2424191671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9062525.785714285,
            "unit": "ns",
            "range": "± 1934687.8527641108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2880824.655737705,
            "unit": "ns",
            "range": "± 128914.06978098307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3036208.223404255,
            "unit": "ns",
            "range": "± 171804.02010946115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3591387.9210526315,
            "unit": "ns",
            "range": "± 123750.302162095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3645036.819672131,
            "unit": "ns",
            "range": "± 153100.8416485148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11097739.5,
            "unit": "ns",
            "range": "± 494594.09842785896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4489154.264935662,
            "unit": "ns",
            "range": "± 87953.19388815398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437682.2811104911,
            "unit": "ns",
            "range": "± 16712.840507833604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 914222.2291434152,
            "unit": "ns",
            "range": "± 5501.449548446144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2067921.8090587799,
            "unit": "ns",
            "range": "± 44485.53690674286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638134.053125,
            "unit": "ns",
            "range": "± 7338.156204338544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578253.5451822917,
            "unit": "ns",
            "range": "± 2066.460729051854"
          }
        ]
      }
    ]
  }
}