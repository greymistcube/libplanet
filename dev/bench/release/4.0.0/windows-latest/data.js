window.BENCHMARK_DATA = {
  "lastUpdate": 1705912030954,
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
          "id": "0c244ba844c82002f0fe9e9ee4efa284b9eb6b6d",
          "message": "Release 4.0.0",
          "timestamp": "2024-01-22T17:14:19+09:00",
          "tree_id": "0245be269c574f07dbe7fadfeb6f381c819d1952",
          "url": "https://github.com/greymistcube/libplanet/commit/0c244ba844c82002f0fe9e9ee4efa284b9eb6b6d"
        },
        "date": 1705912011712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967434.7368421053,
            "unit": "ns",
            "range": "± 73723.2746649498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762819.4029850746,
            "unit": "ns",
            "range": "± 82620.25072548016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1507868.75,
            "unit": "ns",
            "range": "± 127221.80987509468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11128220.430107526,
            "unit": "ns",
            "range": "± 885486.1571302954"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35387.91208791209,
            "unit": "ns",
            "range": "± 2071.3299627070082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5124466.666666667,
            "unit": "ns",
            "range": "± 46258.26052357208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13366985.714285715,
            "unit": "ns",
            "range": "± 63519.40778089138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33563314.28571428,
            "unit": "ns",
            "range": "± 455323.6783738708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66884466.666666664,
            "unit": "ns",
            "range": "± 861725.393503942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133725900,
            "unit": "ns",
            "range": "± 1100230.9799450156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3326473.8839285714,
            "unit": "ns",
            "range": "± 7525.346018886982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086084.6223958333,
            "unit": "ns",
            "range": "± 1605.8212131477708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753345.5859375,
            "unit": "ns",
            "range": "± 1257.0166992385803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960925.1395089286,
            "unit": "ns",
            "range": "± 2909.7540603888724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634456.3346354166,
            "unit": "ns",
            "range": "± 1950.1365976616432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562497.94921875,
            "unit": "ns",
            "range": "± 1006.0876974360021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2175780.5555555555,
            "unit": "ns",
            "range": "± 71266.57328828129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2331797.619047619,
            "unit": "ns",
            "range": "± 84181.21419569268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2867400,
            "unit": "ns",
            "range": "± 78928.78484382664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2757165.8227848103,
            "unit": "ns",
            "range": "± 142417.32184159444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12657761.797752809,
            "unit": "ns",
            "range": "± 1502706.3134335647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178669.49152542374,
            "unit": "ns",
            "range": "± 7890.440620476893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176223.17073170733,
            "unit": "ns",
            "range": "± 9268.482353167894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144044,
            "unit": "ns",
            "range": "± 3698.5447588657535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2881696.6666666665,
            "unit": "ns",
            "range": "± 48070.24423645443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2522442.8571428573,
            "unit": "ns",
            "range": "± 41340.95965328992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12939.583333333334,
            "unit": "ns",
            "range": "± 2397.080644040807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58143.87755102041,
            "unit": "ns",
            "range": "± 7493.475737201457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45474.1935483871,
            "unit": "ns",
            "range": "± 2064.686336188366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63343.43434343435,
            "unit": "ns",
            "range": "± 12685.675366865666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2662.5,
            "unit": "ns",
            "range": "± 441.3496048306949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11537.894736842105,
            "unit": "ns",
            "range": "± 1428.8947482469619"
          }
        ]
      }
    ]
  }
}