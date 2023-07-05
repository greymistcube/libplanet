window.BENCHMARK_DATA = {
  "lastUpdate": 1688535410789,
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
          "id": "a11fa8c295811e9017e6652a48cb5dbb577ca1c9",
          "message": "Remove early termination for tx evaluation",
          "timestamp": "2023-07-05T14:23:42+09:00",
          "tree_id": "499cc83aa3cb35299f3e9593348bc0dab9f54898",
          "url": "https://github.com/greymistcube/libplanet/commit/a11fa8c295811e9017e6652a48cb5dbb577ca1c9"
        },
        "date": 1688535402960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7940501.076923077,
            "unit": "ns",
            "range": "± 24036.093538196325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19912935.14285714,
            "unit": "ns",
            "range": "± 104138.41880206077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51319529.4,
            "unit": "ns",
            "range": "± 182874.35077545143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102173976.73333333,
            "unit": "ns",
            "range": "± 220938.62745486153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204073418.93333334,
            "unit": "ns",
            "range": "± 409571.57398772315"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47699.15957446808,
            "unit": "ns",
            "range": "± 3859.58484954293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292631.65,
            "unit": "ns",
            "range": "± 6622.492075654395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277030.2580645161,
            "unit": "ns",
            "range": "± 7464.286681560142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251458.32142857142,
            "unit": "ns",
            "range": "± 10809.032929759413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4306525.461538462,
            "unit": "ns",
            "range": "± 19868.21634594386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3925134.923076923,
            "unit": "ns",
            "range": "± 26942.31725823875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19245.1935483871,
            "unit": "ns",
            "range": "± 1308.3970217329538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92190.10344827586,
            "unit": "ns",
            "range": "± 5022.04039659061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75284.16216216216,
            "unit": "ns",
            "range": "± 2542.299555231155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89027.35897435897,
            "unit": "ns",
            "range": "± 3662.354380685136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5912.265306122449,
            "unit": "ns",
            "range": "± 733.4740039388098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19784.416666666668,
            "unit": "ns",
            "range": "± 1951.3053426747122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436628.3979591837,
            "unit": "ns",
            "range": "± 103088.29809347456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671986.3333333335,
            "unit": "ns",
            "range": "± 78740.94730160428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1866310.6391752576,
            "unit": "ns",
            "range": "± 135736.3051039577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4881529.944444444,
            "unit": "ns",
            "range": "± 101435.88637945137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6357574.295758928,
            "unit": "ns",
            "range": "± 15492.778134413194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872025.173828125,
            "unit": "ns",
            "range": "± 1150.4852014653939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355559.9705729166,
            "unit": "ns",
            "range": "± 998.1935804023407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585321.1160714286,
            "unit": "ns",
            "range": "± 2157.967498443401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809557.8773018973,
            "unit": "ns",
            "range": "± 650.8291786222228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743367.1428571428,
            "unit": "ns",
            "range": "± 555.8400696109227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3366369.933333333,
            "unit": "ns",
            "range": "± 51692.44707120687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3497532.6923076925,
            "unit": "ns",
            "range": "± 21944.780326175576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4390644.636363637,
            "unit": "ns",
            "range": "± 106842.68621203948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3925415.56,
            "unit": "ns",
            "range": "± 100100.13930313317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6378559.045454546,
            "unit": "ns",
            "range": "± 138830.01019111287"
          }
        ]
      }
    ]
  }
}