window.BENCHMARK_DATA = {
  "lastUpdate": 1699883822376,
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
          "id": "6216e5db6e1a7793d519c621258ea69263a644af",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:44:41+09:00",
          "tree_id": "8dfcfa63381c04b875930b6fc5ea593aaf97847d",
          "url": "https://github.com/greymistcube/libplanet/commit/6216e5db6e1a7793d519c621258ea69263a644af"
        },
        "date": 1699883746180,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5456000.533333333,
            "unit": "ns",
            "range": "± 42111.291013671085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14492218.2,
            "unit": "ns",
            "range": "± 159386.9624190493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36110738.571428575,
            "unit": "ns",
            "range": "± 345176.0382346096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76910225,
            "unit": "ns",
            "range": "± 465066.4008131886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150374839.43333334,
            "unit": "ns",
            "range": "± 557177.3160750876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 997542.3932584269,
            "unit": "ns",
            "range": "± 82604.80631991342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1990822.9538461538,
            "unit": "ns",
            "range": "± 92662.86429501956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524046.9213483145,
            "unit": "ns",
            "range": "± 119889.6908828377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6463923.142857143,
            "unit": "ns",
            "range": "± 200725.3734338891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429778.870967742,
            "unit": "ns",
            "range": "± 73803.94209649506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2572142.6774193547,
            "unit": "ns",
            "range": "± 115713.53263173476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3177532.6153846155,
            "unit": "ns",
            "range": "± 48607.63339664951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3169294.301204819,
            "unit": "ns",
            "range": "± 164545.41516240776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7880778.404255319,
            "unit": "ns",
            "range": "± 255570.62150791453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42995.463917525776,
            "unit": "ns",
            "range": "± 7667.1861405465215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712490.219921875,
            "unit": "ns",
            "range": "± 60978.969531198774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219936.6593191964,
            "unit": "ns",
            "range": "± 2502.3675448882377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763166.2450474331,
            "unit": "ns",
            "range": "± 2663.6459333781027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966588.364955357,
            "unit": "ns",
            "range": "± 16131.989327221374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639194.8149038461,
            "unit": "ns",
            "range": "± 1154.3041957045598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589650.5551757812,
            "unit": "ns",
            "range": "± 11606.177154089994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234090.34020618556,
            "unit": "ns",
            "range": "± 23833.43592382637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217545.43434343435,
            "unit": "ns",
            "range": "± 17637.59873294896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173495.4775280899,
            "unit": "ns",
            "range": "± 12059.574660803313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3106580.3333333335,
            "unit": "ns",
            "range": "± 29819.887172316685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807062.785714286,
            "unit": "ns",
            "range": "± 34269.676475271546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17154.870967741936,
            "unit": "ns",
            "range": "± 2838.7872342658184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67688.37113402062,
            "unit": "ns",
            "range": "± 10518.693455304137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71586.09,
            "unit": "ns",
            "range": "± 18150.311028915283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92410.96875,
            "unit": "ns",
            "range": "± 9243.763408178596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6470.853535353535,
            "unit": "ns",
            "range": "± 1141.776482943435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20388.78021978022,
            "unit": "ns",
            "range": "± 2530.2824120033097"
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
          "id": "ce138e16c5b136bf994e756ba696a86b632dba01",
          "message": "Changelog",
          "timestamp": "2023-11-13T22:46:04+09:00",
          "tree_id": "de06c7658cf66089c6b29abf46d9bd761dbc0c8c",
          "url": "https://github.com/greymistcube/libplanet/commit/ce138e16c5b136bf994e756ba696a86b632dba01"
        },
        "date": 1699883812628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5505765,
            "unit": "ns",
            "range": "± 24153.2785007198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14329872.357142856,
            "unit": "ns",
            "range": "± 120013.4319641938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36187602.85714286,
            "unit": "ns",
            "range": "± 163154.62319145986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73647611.92307693,
            "unit": "ns",
            "range": "± 434549.15740194876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147533253.5,
            "unit": "ns",
            "range": "± 981056.1417489552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021626.1313131313,
            "unit": "ns",
            "range": "± 112259.9896589951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1927429.5614035088,
            "unit": "ns",
            "range": "± 83641.8926875628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1576801.469387755,
            "unit": "ns",
            "range": "± 118263.66475220853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6522760.574468086,
            "unit": "ns",
            "range": "± 251786.78623993037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2361398.1428571427,
            "unit": "ns",
            "range": "± 38932.23572055757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2450796,
            "unit": "ns",
            "range": "± 75635.29822320065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3112127.7714285715,
            "unit": "ns",
            "range": "± 100660.38456118197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3044625.3285714285,
            "unit": "ns",
            "range": "± 146893.33916862216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7659956.317073171,
            "unit": "ns",
            "range": "± 269856.7292375196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42014.237113402065,
            "unit": "ns",
            "range": "± 6105.065331641279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720600.0322916666,
            "unit": "ns",
            "range": "± 35560.71178819212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200527.7922712055,
            "unit": "ns",
            "range": "± 15992.49305663877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759388.4615234375,
            "unit": "ns",
            "range": "± 2407.428107639329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969374.90625,
            "unit": "ns",
            "range": "± 16638.03139877444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618744.1586588542,
            "unit": "ns",
            "range": "± 11378.530246444054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579217.34453125,
            "unit": "ns",
            "range": "± 8925.70723041461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205011.68354430379,
            "unit": "ns",
            "range": "± 10643.813419847262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203599.48387096773,
            "unit": "ns",
            "range": "± 11475.455675913083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166997.32258064515,
            "unit": "ns",
            "range": "± 5043.956703403237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3132435.5833333335,
            "unit": "ns",
            "range": "± 32974.72268670582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2886113.5714285714,
            "unit": "ns",
            "range": "± 36438.67054636891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18260.05,
            "unit": "ns",
            "range": "± 5524.76742300369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64814.244897959186,
            "unit": "ns",
            "range": "± 6813.517903995445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70233.53,
            "unit": "ns",
            "range": "± 18572.600473073882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75494.4,
            "unit": "ns",
            "range": "± 24193.465921044208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3040.176470588235,
            "unit": "ns",
            "range": "± 524.2340711404951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16389.708333333332,
            "unit": "ns",
            "range": "± 1935.6394450939229"
          }
        ]
      }
    ]
  }
}