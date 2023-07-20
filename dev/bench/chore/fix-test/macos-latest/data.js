window.BENCHMARK_DATA = {
  "lastUpdate": 1689822469399,
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
          "id": "af6f83ceeb3a583a1157b9496332826fd8e37e90",
          "message": "Simple test fix",
          "timestamp": "2023-07-20T01:40:51+09:00",
          "tree_id": "957d5b3c5e1ff5e5c90d3fff0e604c1225fe9000",
          "url": "https://github.com/greymistcube/libplanet/commit/af6f83ceeb3a583a1157b9496332826fd8e37e90"
        },
        "date": 1689786083529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9017954.11764706,
            "unit": "ns",
            "range": "± 177101.81959570685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23090714.63157895,
            "unit": "ns",
            "range": "± 505264.4039966941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57632868,
            "unit": "ns",
            "range": "± 893689.1873549898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116161760.6,
            "unit": "ns",
            "range": "± 2076563.1678489796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236850772.4,
            "unit": "ns",
            "range": "± 2702647.516443666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66589.82608695653,
            "unit": "ns",
            "range": "± 6001.083156093154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 382017.15168539324,
            "unit": "ns",
            "range": "± 35201.25358049997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357222.15934065933,
            "unit": "ns",
            "range": "± 21532.792587235035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323421.775862069,
            "unit": "ns",
            "range": "± 14065.521675101158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4708799.263157895,
            "unit": "ns",
            "range": "± 101323.31506773645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4139688.85,
            "unit": "ns",
            "range": "± 146469.00507765615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20664.35714285714,
            "unit": "ns",
            "range": "± 2399.6514136550745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100529.56842105264,
            "unit": "ns",
            "range": "± 10872.34052749456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94880.625,
            "unit": "ns",
            "range": "± 11355.50707319905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114014.24210526315,
            "unit": "ns",
            "range": "± 13721.62858000354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5529.876404494382,
            "unit": "ns",
            "range": "± 769.471731718715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18991.31818181818,
            "unit": "ns",
            "range": "± 2225.9149612772803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1899903.2765957448,
            "unit": "ns",
            "range": "± 194828.09898937872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3331360.8571428573,
            "unit": "ns",
            "range": "± 141907.42162697334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2434532.652631579,
            "unit": "ns",
            "range": "± 254175.06328110263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7457283.784090909,
            "unit": "ns",
            "range": "± 700841.8739683757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3981464.265957447,
            "unit": "ns",
            "range": "± 313348.53506486904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4139732.4239130435,
            "unit": "ns",
            "range": "± 288640.0540517066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5345522.15,
            "unit": "ns",
            "range": "± 236775.72173990242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4753787.083333333,
            "unit": "ns",
            "range": "± 180328.2950460234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8681628.613636363,
            "unit": "ns",
            "range": "± 322507.60927797674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6703095.148995535,
            "unit": "ns",
            "range": "± 86827.13512033843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135372.1651785714,
            "unit": "ns",
            "range": "± 27349.63137295748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427100.13828125,
            "unit": "ns",
            "range": "± 16503.288907611346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2778939.44140625,
            "unit": "ns",
            "range": "± 27512.596045363192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901137.6524088542,
            "unit": "ns",
            "range": "± 8828.217792589794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903061.7518880208,
            "unit": "ns",
            "range": "± 9874.870786290325"
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
          "id": "ba662cd6cf763d049714afff7b78975135e5512e",
          "message": "Simple test fix",
          "timestamp": "2023-07-20T11:52:06+09:00",
          "tree_id": "957d5b3c5e1ff5e5c90d3fff0e604c1225fe9000",
          "url": "https://github.com/greymistcube/libplanet/commit/ba662cd6cf763d049714afff7b78975135e5512e"
        },
        "date": 1689822448159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7782555.625,
            "unit": "ns",
            "range": "± 137058.47777202012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18934961.684210528,
            "unit": "ns",
            "range": "± 367082.8819703699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47457228,
            "unit": "ns",
            "range": "± 927991.8837117058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93552579.57142857,
            "unit": "ns",
            "range": "± 990884.9871963691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187273477.26666668,
            "unit": "ns",
            "range": "± 1819023.7697603651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53466.77173913043,
            "unit": "ns",
            "range": "± 4283.354562718545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302735.4479166667,
            "unit": "ns",
            "range": "± 17493.96681136839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285686.3222222222,
            "unit": "ns",
            "range": "± 16277.907360624513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276722.52857142856,
            "unit": "ns",
            "range": "± 13045.71000031103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4004000.0555555555,
            "unit": "ns",
            "range": "± 82933.79763789785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3683535.1428571427,
            "unit": "ns",
            "range": "± 86442.42193233929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16809.344086021505,
            "unit": "ns",
            "range": "± 1878.7872909581147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82958.98936170213,
            "unit": "ns",
            "range": "± 8765.345358738017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74626.55789473685,
            "unit": "ns",
            "range": "± 6710.967674010398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94979.60824742269,
            "unit": "ns",
            "range": "± 11380.476990549705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4525.735294117647,
            "unit": "ns",
            "range": "± 576.002886216703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16665.571428571428,
            "unit": "ns",
            "range": "± 1817.5649592111918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484193.1530612244,
            "unit": "ns",
            "range": "± 130019.58814259544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2794536.923076923,
            "unit": "ns",
            "range": "± 143981.5164478999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1942227.9468085107,
            "unit": "ns",
            "range": "± 131393.35838424924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5748759.764705882,
            "unit": "ns",
            "range": "± 261100.23231084965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3027323.8529411764,
            "unit": "ns",
            "range": "± 95458.25369552353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3325738.7,
            "unit": "ns",
            "range": "± 120715.28980275558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4119703.285714286,
            "unit": "ns",
            "range": "± 95139.07199102946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3703776.9102564105,
            "unit": "ns",
            "range": "± 127659.42818125147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6783039.244444445,
            "unit": "ns",
            "range": "± 235896.61903451727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6167674.511979166,
            "unit": "ns",
            "range": "± 48171.18992933294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1868490.6796875,
            "unit": "ns",
            "range": "± 8881.2296000953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1228264.6505408655,
            "unit": "ns",
            "range": "± 4442.415795148245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2584417.9860491073,
            "unit": "ns",
            "range": "± 12326.75342336284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809086.1177734375,
            "unit": "ns",
            "range": "± 4235.24442716423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 694010.2772739956,
            "unit": "ns",
            "range": "± 3663.833517032006"
          }
        ]
      }
    ]
  }
}