window.BENCHMARK_DATA = {
  "lastUpdate": 1691117683162,
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
          "id": "00df6e8b29f1fd741cf38622a90dc24c93ea57aa",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-03T18:02:54+09:00",
          "tree_id": "ec9c186229f152f3efbd7dc08393240dfeda5f5e",
          "url": "https://github.com/greymistcube/libplanet/commit/00df6e8b29f1fd741cf38622a90dc24c93ea57aa"
        },
        "date": 1691055352228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413629.6296296297,
            "unit": "ns",
            "range": "± 34203.450284964114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2480156.6666666665,
            "unit": "ns",
            "range": "± 110728.91981598943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1711730.612244898,
            "unit": "ns",
            "range": "± 160416.0437564356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4693709.278350515,
            "unit": "ns",
            "range": "± 414241.99652358866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45703.333333333336,
            "unit": "ns",
            "range": "± 2752.8718406032854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7296274.074074074,
            "unit": "ns",
            "range": "± 179370.33155027573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605104.166666668,
            "unit": "ns",
            "range": "± 448375.32946053194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47723423.07692308,
            "unit": "ns",
            "range": "± 435063.7944674439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96684951.85185185,
            "unit": "ns",
            "range": "± 2708372.1018027347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198334823.68421054,
            "unit": "ns",
            "range": "± 6767780.962625234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4483761.666666667,
            "unit": "ns",
            "range": "± 50799.91033219332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1395707.8125,
            "unit": "ns",
            "range": "± 5058.451871886078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1067915.1041666667,
            "unit": "ns",
            "range": "± 6216.917713920344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630020.9895833335,
            "unit": "ns",
            "range": "± 13250.955793731575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817991.2667410715,
            "unit": "ns",
            "range": "± 2707.376603004145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758395.0846354166,
            "unit": "ns",
            "range": "± 10489.05772845187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3078609.8039215687,
            "unit": "ns",
            "range": "± 112632.54281938584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3295775.5102040814,
            "unit": "ns",
            "range": "± 200278.18440020928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3931557.1428571427,
            "unit": "ns",
            "range": "± 67144.47928833091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3564241.7721518986,
            "unit": "ns",
            "range": "± 178940.7426679648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5783945,
            "unit": "ns",
            "range": "± 203152.90559399355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244234.78260869565,
            "unit": "ns",
            "range": "± 9278.055768348222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235856.89655172414,
            "unit": "ns",
            "range": "± 10287.72240609651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210350.98039215687,
            "unit": "ns",
            "range": "± 8503.890228572323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3975086.6666666665,
            "unit": "ns",
            "range": "± 70500.33299482317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3838177.777777778,
            "unit": "ns",
            "range": "± 104767.0725332129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19114.736842105263,
            "unit": "ns",
            "range": "± 1514.747954671473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83795.8762886598,
            "unit": "ns",
            "range": "± 6635.964472820518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69818.18181818182,
            "unit": "ns",
            "range": "± 3834.014295974206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81908.16326530612,
            "unit": "ns",
            "range": "± 13855.55583581768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4735.416666666667,
            "unit": "ns",
            "range": "± 545.0213258341689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18735.483870967742,
            "unit": "ns",
            "range": "± 1418.1007783905236"
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
          "id": "d209af2c548175a4015c475c59a1cf3178400d1b",
          "message": "Parallel get for ITrie",
          "timestamp": "2023-08-04T11:39:35+09:00",
          "tree_id": "39363b6e5139d625a77b3009aa132541c3ab578a",
          "url": "https://github.com/greymistcube/libplanet/commit/d209af2c548175a4015c475c59a1cf3178400d1b"
        },
        "date": 1691117656868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285558.163265306,
            "unit": "ns",
            "range": "± 116753.62545285454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2380629.5081967213,
            "unit": "ns",
            "range": "± 106973.78860303787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1624335.7142857143,
            "unit": "ns",
            "range": "± 131695.04859614986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4217441.304347826,
            "unit": "ns",
            "range": "± 161789.28075478226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43182.35294117647,
            "unit": "ns",
            "range": "± 1961.9470360029532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7034186.666666667,
            "unit": "ns",
            "range": "± 85223.61231042775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17791373.333333332,
            "unit": "ns",
            "range": "± 114814.9658404878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46153113.333333336,
            "unit": "ns",
            "range": "± 278656.6265564297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90894706.66666667,
            "unit": "ns",
            "range": "± 632690.9869378423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184043106.66666666,
            "unit": "ns",
            "range": "± 791385.7994201118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4316267.518028846,
            "unit": "ns",
            "range": "± 7946.381118868236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396214.21875,
            "unit": "ns",
            "range": "± 1787.2055957581204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 989960.5859375,
            "unit": "ns",
            "range": "± 913.7740800020657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572940.8761160714,
            "unit": "ns",
            "range": "± 2295.7749289496874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811937.0465959822,
            "unit": "ns",
            "range": "± 1354.8454357671621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718918.26171875,
            "unit": "ns",
            "range": "± 760.6296730189018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3074773.3333333335,
            "unit": "ns",
            "range": "± 55383.84842773809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3101785.294117647,
            "unit": "ns",
            "range": "± 71501.49026780445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3997790.909090909,
            "unit": "ns",
            "range": "± 95824.0632821219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3453650,
            "unit": "ns",
            "range": "± 86179.55209909135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5628363.636363637,
            "unit": "ns",
            "range": "± 160589.38674882482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248045,
            "unit": "ns",
            "range": "± 8736.717390944425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236453.48837209304,
            "unit": "ns",
            "range": "± 8139.596013059489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218453.0612244898,
            "unit": "ns",
            "range": "± 12922.56241611062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3786714.285714286,
            "unit": "ns",
            "range": "± 27639.509267124708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3490935.714285714,
            "unit": "ns",
            "range": "± 41615.28208839516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19891.57894736842,
            "unit": "ns",
            "range": "± 1648.7689255213534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86180.41237113402,
            "unit": "ns",
            "range": "± 6391.704245466308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69374.46808510639,
            "unit": "ns",
            "range": "± 2682.4281736083803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81731.81818181818,
            "unit": "ns",
            "range": "± 14811.270967776214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4628.571428571428,
            "unit": "ns",
            "range": "± 574.7702364791239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19965.625,
            "unit": "ns",
            "range": "± 1909.8265628061622"
          }
        ]
      }
    ]
  }
}