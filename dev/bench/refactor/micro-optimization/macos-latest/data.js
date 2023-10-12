window.BENCHMARK_DATA = {
  "lastUpdate": 1697117134741,
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
          "id": "0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7",
          "message": "Optimized BlockMarshaler",
          "timestamp": "2023-10-12T21:52:00+09:00",
          "tree_id": "2bf417fb47ee9a4212fde2010631d21168985448",
          "url": "https://github.com/greymistcube/libplanet/commit/0e8cb7af9ee23d25f1d64e74dfeba9781e0e54e7"
        },
        "date": 1697116069260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7516801.384615385,
            "unit": "ns",
            "range": "± 47061.7773986818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18558876.923076924,
            "unit": "ns",
            "range": "± 257962.68969738676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47743116.96,
            "unit": "ns",
            "range": "± 1255793.2458578215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92347185,
            "unit": "ns",
            "range": "± 1610765.7437725076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188215536.44444445,
            "unit": "ns",
            "range": "± 3690119.569150356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34182.589887640446,
            "unit": "ns",
            "range": "± 2560.8625972176633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219135.47916666666,
            "unit": "ns",
            "range": "± 15112.082312876022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215613.31460674157,
            "unit": "ns",
            "range": "± 18774.148797188886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192901.25274725276,
            "unit": "ns",
            "range": "± 17156.795890060206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3653319.785714286,
            "unit": "ns",
            "range": "± 62703.16603149818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3412350.0263157897,
            "unit": "ns",
            "range": "± 61525.44352485258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12867.891304347826,
            "unit": "ns",
            "range": "± 1354.0621705378953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59242.484210526316,
            "unit": "ns",
            "range": "± 6101.345737261503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53678.03488372093,
            "unit": "ns",
            "range": "± 3879.490016355771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62476.25274725275,
            "unit": "ns",
            "range": "± 13507.877743165203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3421.9347826086955,
            "unit": "ns",
            "range": "± 459.61197930877313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12100.615384615385,
            "unit": "ns",
            "range": "± 1349.9767715633789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1202936.7857142857,
            "unit": "ns",
            "range": "± 184365.92954226802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2587057.60989011,
            "unit": "ns",
            "range": "± 279902.4752676248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1934927.6842105263,
            "unit": "ns",
            "range": "± 233238.91131199698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8682121.558139535,
            "unit": "ns",
            "range": "± 1159482.1843047272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2907535.7011494255,
            "unit": "ns",
            "range": "± 153270.909336735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2970193.1142857145,
            "unit": "ns",
            "range": "± 84239.82003666724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3532357.8181818184,
            "unit": "ns",
            "range": "± 131866.89318933708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3518396.285714286,
            "unit": "ns",
            "range": "± 169819.70778754633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11402501.010638298,
            "unit": "ns",
            "range": "± 1146670.4669561663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4253516.5796875,
            "unit": "ns",
            "range": "± 79370.1250084143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321472.6375732422,
            "unit": "ns",
            "range": "± 19360.075773398497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 854627.4965494792,
            "unit": "ns",
            "range": "± 15381.353947816244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933726.9623325893,
            "unit": "ns",
            "range": "± 26721.965389534224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623687.9443359375,
            "unit": "ns",
            "range": "± 6210.148244220966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577545.7934244792,
            "unit": "ns",
            "range": "± 7373.388005590306"
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
          "id": "bd218520742c2b0877fe99d9d21a5d385373ca4f",
          "message": "Changelog",
          "timestamp": "2023-10-12T22:08:45+09:00",
          "tree_id": "aa484ec8af9c2fe572a5de245fb0256607b82d11",
          "url": "https://github.com/greymistcube/libplanet/commit/bd218520742c2b0877fe99d9d21a5d385373ca4f"
        },
        "date": 1697117121072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7803166.64,
            "unit": "ns",
            "range": "± 203833.8883286012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18802016,
            "unit": "ns",
            "range": "± 153119.03232704036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47144052.92307692,
            "unit": "ns",
            "range": "± 431009.5059704719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93170113.42307693,
            "unit": "ns",
            "range": "± 506029.559381739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191713271.92307693,
            "unit": "ns",
            "range": "± 2749062.477778484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65220.47422680412,
            "unit": "ns",
            "range": "± 13610.813100323323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304727.24468085106,
            "unit": "ns",
            "range": "± 24304.119314411808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290771.56842105265,
            "unit": "ns",
            "range": "± 20212.82253056667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285907.68131868134,
            "unit": "ns",
            "range": "± 16930.076498402428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039428.2,
            "unit": "ns",
            "range": "± 153126.3385773923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674943.466666667,
            "unit": "ns",
            "range": "± 107083.76978432813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18375.466666666667,
            "unit": "ns",
            "range": "± 1529.0177463127516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85085.44680851063,
            "unit": "ns",
            "range": "± 8345.683119011092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94559.22680412371,
            "unit": "ns",
            "range": "± 15653.788190685897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92848.38636363637,
            "unit": "ns",
            "range": "± 11733.625434025871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5625.808510638298,
            "unit": "ns",
            "range": "± 1303.2035736351372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18071.606382978724,
            "unit": "ns",
            "range": "± 2399.4792410741784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1620848.4042553192,
            "unit": "ns",
            "range": "± 220431.52623385438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3040057.8735632184,
            "unit": "ns",
            "range": "± 280778.7501839824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2580769.276595745,
            "unit": "ns",
            "range": "± 299445.97225120774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13533587.666666666,
            "unit": "ns",
            "range": "± 3833178.6135317385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3198039.094736842,
            "unit": "ns",
            "range": "± 183213.6454950232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366059.1428571427,
            "unit": "ns",
            "range": "± 91827.32511247494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4246297.26984127,
            "unit": "ns",
            "range": "± 192042.89609138877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4259565.28125,
            "unit": "ns",
            "range": "± 267508.4692182642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15489421.984210527,
            "unit": "ns",
            "range": "± 1755222.983272392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5489303.765625,
            "unit": "ns",
            "range": "± 47753.99295983948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1708237.92265625,
            "unit": "ns",
            "range": "± 31233.608742226523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 985830.5013950893,
            "unit": "ns",
            "range": "± 7572.651906935393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646409.5049342103,
            "unit": "ns",
            "range": "± 57212.229162499665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785945.3346354166,
            "unit": "ns",
            "range": "± 3270.4519050632234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710049.19609375,
            "unit": "ns",
            "range": "± 6524.948824145175"
          }
        ]
      }
    ]
  }
}