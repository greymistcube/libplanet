window.BENCHMARK_DATA = {
  "lastUpdate": 1694495137334,
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
        "date": 1694478535816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1548572.7272727273,
            "unit": "ns",
            "range": "± 104938.12250431674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2903892.727272727,
            "unit": "ns",
            "range": "± 123406.7902185851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988187.5,
            "unit": "ns",
            "range": "± 103614.2179958237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5206367.777777778,
            "unit": "ns",
            "range": "± 288402.32230663503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58043.75,
            "unit": "ns",
            "range": "± 4012.5805451827314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9000240,
            "unit": "ns",
            "range": "± 163266.1753089108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24627469.230769232,
            "unit": "ns",
            "range": "± 298580.0740857059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61914320,
            "unit": "ns",
            "range": "± 810606.0468210542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123138721.42857143,
            "unit": "ns",
            "range": "± 1196099.4878730238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245833426.66666666,
            "unit": "ns",
            "range": "± 2379372.9079218293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5362312.555803572,
            "unit": "ns",
            "range": "± 15712.481878705177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1732145.5078125,
            "unit": "ns",
            "range": "± 6961.107522734034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274911.900111607,
            "unit": "ns",
            "range": "± 6820.8170547473255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3193844.7265625,
            "unit": "ns",
            "range": "± 20247.88997702663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986031.4174107143,
            "unit": "ns",
            "range": "± 4195.710938343967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 950025.7942708334,
            "unit": "ns",
            "range": "± 17442.044107756363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3903609.523809524,
            "unit": "ns",
            "range": "± 89045.07793675012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4651220,
            "unit": "ns",
            "range": "± 78344.24219886414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4877950,
            "unit": "ns",
            "range": "± 103347.0011517452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4511764.705882353,
            "unit": "ns",
            "range": "± 143208.2608975642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7149466.666666667,
            "unit": "ns",
            "range": "± 234971.00003435076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302716.6666666667,
            "unit": "ns",
            "range": "± 7251.96625011132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301883.67346938775,
            "unit": "ns",
            "range": "± 10978.982704444425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271185.8585858586,
            "unit": "ns",
            "range": "± 17291.935185790913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4957770,
            "unit": "ns",
            "range": "± 60199.01755249594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4578176.923076923,
            "unit": "ns",
            "range": "± 54324.56709209554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25008.333333333332,
            "unit": "ns",
            "range": "± 1883.762565587493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103392.70833333333,
            "unit": "ns",
            "range": "± 7791.996498319578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84425.26315789473,
            "unit": "ns",
            "range": "± 5835.929950526995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96045.50561797753,
            "unit": "ns",
            "range": "± 13993.885922336027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6207.142857142857,
            "unit": "ns",
            "range": "± 925.7206721720102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23645.16129032258,
            "unit": "ns",
            "range": "± 2104.111716379863"
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
        "date": 1694485820934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668325.2631578948,
            "unit": "ns",
            "range": "± 166727.19657688562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3289259.793814433,
            "unit": "ns",
            "range": "± 244613.6710286727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2139936.0824742266,
            "unit": "ns",
            "range": "± 160991.13406331764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5624618.309859155,
            "unit": "ns",
            "range": "± 275563.48364234075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61144.791666666664,
            "unit": "ns",
            "range": "± 7235.837270749801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9880107.692307692,
            "unit": "ns",
            "range": "± 40100.362873222264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26677994.736842107,
            "unit": "ns",
            "range": "± 1281340.2983745562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64625100,
            "unit": "ns",
            "range": "± 2456508.587848598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122388565.51724137,
            "unit": "ns",
            "range": "± 3532278.5407556356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255733353.84615386,
            "unit": "ns",
            "range": "± 3841224.128802211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5381564.302884615,
            "unit": "ns",
            "range": "± 42271.21316067541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1711915.9114583333,
            "unit": "ns",
            "range": "± 19311.519649751677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265698.7760416667,
            "unit": "ns",
            "range": "± 17446.631004078678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124110.310444079,
            "unit": "ns",
            "range": "± 65132.92102011575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980793.0635340074,
            "unit": "ns",
            "range": "± 19328.192133964007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918714.7981770834,
            "unit": "ns",
            "range": "± 16460.036350898863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4108694.117647059,
            "unit": "ns",
            "range": "± 165355.105650554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4344572.222222222,
            "unit": "ns",
            "range": "± 87990.88726584171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5173302.325581395,
            "unit": "ns",
            "range": "± 189744.83051917018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4353562.2950819675,
            "unit": "ns",
            "range": "± 186504.14487255987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7201311.538461538,
            "unit": "ns",
            "range": "± 294466.48909101135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296635.71428571426,
            "unit": "ns",
            "range": "± 15827.07488715615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283472.82608695654,
            "unit": "ns",
            "range": "± 18400.45450502242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264742.85714285716,
            "unit": "ns",
            "range": "± 21122.32902653386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4749397.530864198,
            "unit": "ns",
            "range": "± 249346.78410564506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4586622.222222222,
            "unit": "ns",
            "range": "± 94796.80936276009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24020,
            "unit": "ns",
            "range": "± 2451.4259853607914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103617.8947368421,
            "unit": "ns",
            "range": "± 11847.110958959916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105864,
            "unit": "ns",
            "range": "± 18798.605793993866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110066.31578947368,
            "unit": "ns",
            "range": "± 14816.340968216484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8325.757575757576,
            "unit": "ns",
            "range": "± 1381.5172751171533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29081.052631578947,
            "unit": "ns",
            "range": "± 3225.4735669732286"
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
        "date": 1694495110587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390577.894736842,
            "unit": "ns",
            "range": "± 105061.57381932299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652469.4915254237,
            "unit": "ns",
            "range": "± 109693.85808449412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1727179.347826087,
            "unit": "ns",
            "range": "± 107122.21380124614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4495326.315789473,
            "unit": "ns",
            "range": "± 150845.6535026924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53714.73684210526,
            "unit": "ns",
            "range": "± 3735.794894509197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8194871.428571428,
            "unit": "ns",
            "range": "± 137970.9580843928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21510013.333333332,
            "unit": "ns",
            "range": "± 319750.34651308524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53468771.428571425,
            "unit": "ns",
            "range": "± 293097.2913518687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106966657.14285715,
            "unit": "ns",
            "range": "± 700845.3782224894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213983400,
            "unit": "ns",
            "range": "± 1224167.5019608806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4602444.53125,
            "unit": "ns",
            "range": "± 20720.700173601548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1428009.8911830357,
            "unit": "ns",
            "range": "± 4626.802807089709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073312.0572916667,
            "unit": "ns",
            "range": "± 3943.179271332491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2666146.5104166665,
            "unit": "ns",
            "range": "± 9047.38644896844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842630.9049479166,
            "unit": "ns",
            "range": "± 2652.6402301906096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776961.484375,
            "unit": "ns",
            "range": "± 2260.3128276762254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450250,
            "unit": "ns",
            "range": "± 53671.17475889642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3614784.6153846155,
            "unit": "ns",
            "range": "± 46107.78759518913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4329706.666666667,
            "unit": "ns",
            "range": "± 75208.49559407374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3933618.918918919,
            "unit": "ns",
            "range": "± 123399.38284970344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6166575,
            "unit": "ns",
            "range": "± 201477.76818157523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268612,
            "unit": "ns",
            "range": "± 9887.709129860905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256807.14285714287,
            "unit": "ns",
            "range": "± 10931.653075406253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248558.97435897434,
            "unit": "ns",
            "range": "± 8487.784347572939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206200,
            "unit": "ns",
            "range": "± 37949.13093157126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3886900,
            "unit": "ns",
            "range": "± 43470.62668763109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26386.458333333332,
            "unit": "ns",
            "range": "± 2847.8845257365724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107051,
            "unit": "ns",
            "range": "± 9336.000647001267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90967.70833333333,
            "unit": "ns",
            "range": "± 7230.22886427702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94807.36842105263,
            "unit": "ns",
            "range": "± 12232.223246585689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6902.577319587629,
            "unit": "ns",
            "range": "± 1136.8902013373618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24342.708333333332,
            "unit": "ns",
            "range": "± 2571.8616968490546"
          }
        ]
      }
    ]
  }
}