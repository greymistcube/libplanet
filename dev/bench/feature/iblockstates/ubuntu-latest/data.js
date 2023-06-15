window.BENCHMARK_DATA = {
  "lastUpdate": 1686807265707,
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
          "id": "4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19",
          "message": "Added back in caching",
          "timestamp": "2023-06-15T14:05:24+09:00",
          "tree_id": "110b574e04752f39a883ac7f751da8fc894a7002",
          "url": "https://github.com/greymistcube/libplanet/commit/4f2ee2a881d1fb1a3f63839ef3ba3e9e64ec8b19"
        },
        "date": 1686807258567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481617.4795918367,
            "unit": "ns",
            "range": "± 103865.90969975333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2843740.150943396,
            "unit": "ns",
            "range": "± 117307.30959328682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2369360.7204301073,
            "unit": "ns",
            "range": "± 134180.41989356084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5824962.701492538,
            "unit": "ns",
            "range": "± 275279.84022571915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623826.882352941,
            "unit": "ns",
            "range": "± 115890.05631011445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3722344.8214285714,
            "unit": "ns",
            "range": "± 106268.56675669661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4410584.878787879,
            "unit": "ns",
            "range": "± 135801.42755687382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4428228.5636363635,
            "unit": "ns",
            "range": "± 186893.1903326924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7258215.344827586,
            "unit": "ns",
            "range": "± 315958.399154152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7747104.666666667,
            "unit": "ns",
            "range": "± 122243.80540815418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21241873.133333333,
            "unit": "ns",
            "range": "± 342212.01818627556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55071528.2,
            "unit": "ns",
            "range": "± 791048.3518769976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106698900.5,
            "unit": "ns",
            "range": "± 995876.6631529111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216208544.33333334,
            "unit": "ns",
            "range": "± 3149719.4792001187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6014838.7328125,
            "unit": "ns",
            "range": "± 18741.519647031637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863230.1984375,
            "unit": "ns",
            "range": "± 4764.94501154676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372367.8225260417,
            "unit": "ns",
            "range": "± 5836.203572141832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612385.468489583,
            "unit": "ns",
            "range": "± 4255.908262260925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831353.8751953125,
            "unit": "ns",
            "range": "± 1092.55796900701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760317.0839146206,
            "unit": "ns",
            "range": "± 905.8677101889817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47929.79069767442,
            "unit": "ns",
            "range": "± 2591.294335298046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284955.4032258064,
            "unit": "ns",
            "range": "± 12979.058034298727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271409.5294117647,
            "unit": "ns",
            "range": "± 8757.789212640831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235283.32,
            "unit": "ns",
            "range": "± 6087.9242680353145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4326899,
            "unit": "ns",
            "range": "± 62253.56089298943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3974391.6875,
            "unit": "ns",
            "range": "± 75771.17371377125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19876.052631578947,
            "unit": "ns",
            "range": "± 2327.859359868656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88815.61445783133,
            "unit": "ns",
            "range": "± 4724.860671145726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75423.24074074074,
            "unit": "ns",
            "range": "± 3002.947262558085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103370.73469387754,
            "unit": "ns",
            "range": "± 13597.858104189441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5415.697916666667,
            "unit": "ns",
            "range": "± 907.8809928943175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16946.52688172043,
            "unit": "ns",
            "range": "± 1334.657199037802"
          }
        ]
      }
    ]
  }
}