window.BENCHMARK_DATA = {
  "lastUpdate": 1688658135124,
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
          "id": "89a25a4b080cbe374d3980a9597553c31d3a0b36",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T00:28:26+09:00",
          "tree_id": "6712e28f56ebe2d34846870b23e67ddbe59dca6c",
          "url": "https://github.com/greymistcube/libplanet/commit/89a25a4b080cbe374d3980a9597553c31d3a0b36"
        },
        "date": 1688658125793,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304691.10714285716,
            "unit": "ns",
            "range": "± 12329.89506211862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298567.25373134325,
            "unit": "ns",
            "range": "± 14100.617201560646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268829.0657894737,
            "unit": "ns",
            "range": "± 13618.084448101135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347515.066666666,
            "unit": "ns",
            "range": "± 55509.183566411106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3989234.9444444445,
            "unit": "ns",
            "range": "± 80212.54635285241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24433,
            "unit": "ns",
            "range": "± 2822.7829943751135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113980.83838383839,
            "unit": "ns",
            "range": "± 10593.481078539235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99529.21,
            "unit": "ns",
            "range": "± 12920.756345168507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105042.50574712643,
            "unit": "ns",
            "range": "± 9359.505856656137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7331.632653061224,
            "unit": "ns",
            "range": "± 1496.566306257721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24073.715789473685,
            "unit": "ns",
            "range": "± 2685.088396116747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479113.2210526315,
            "unit": "ns",
            "range": "± 109477.16805831084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738820.205882353,
            "unit": "ns",
            "range": "± 85903.23159504234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940068.2,
            "unit": "ns",
            "range": "± 156795.09862353356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5136866.173913044,
            "unit": "ns",
            "range": "± 126226.8818627259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6601476.110416667,
            "unit": "ns",
            "range": "± 14936.952490610653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865372.871372768,
            "unit": "ns",
            "range": "± 4355.272267023209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366857.1925223214,
            "unit": "ns",
            "range": "± 1169.2731010460714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649675.4111979166,
            "unit": "ns",
            "range": "± 8935.864317088734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802760.0825892857,
            "unit": "ns",
            "range": "± 635.557856482109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737954.5583844866,
            "unit": "ns",
            "range": "± 1077.9962646955485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3470401.4444444445,
            "unit": "ns",
            "range": "± 94653.34343452075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3641269.8947368423,
            "unit": "ns",
            "range": "± 110143.3517827316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433757.68,
            "unit": "ns",
            "range": "± 118212.5913875506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3993356.765957447,
            "unit": "ns",
            "range": "± 136225.3583347977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6674788.2,
            "unit": "ns",
            "range": "± 193994.96163496858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8346348.166666667,
            "unit": "ns",
            "range": "± 175299.50682667785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20500380.14285714,
            "unit": "ns",
            "range": "± 296845.56121190154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52728507.384615384,
            "unit": "ns",
            "range": "± 487087.42417156463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105261702,
            "unit": "ns",
            "range": "± 850046.3300597209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209930475.86666667,
            "unit": "ns",
            "range": "± 967206.0102399419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62888.701030927834,
            "unit": "ns",
            "range": "± 8518.113066387987"
          }
        ]
      }
    ]
  }
}