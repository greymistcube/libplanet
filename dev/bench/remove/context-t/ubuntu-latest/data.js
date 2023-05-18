window.BENCHMARK_DATA = {
  "lastUpdate": 1684407954292,
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
          "id": "6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c",
          "message": "Removed t from Context and ConsensusContext",
          "timestamp": "2023-05-18T19:53:46+09:00",
          "tree_id": "66139e90fd004f391d5a5c9cff75f998c5569cf7",
          "url": "https://github.com/greymistcube/libplanet/commit/6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c"
        },
        "date": 1684407946639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3244105.7333333334,
            "unit": "ns",
            "range": "± 59327.52029739736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3336238.4583333335,
            "unit": "ns",
            "range": "± 59565.291335007125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4162336.6,
            "unit": "ns",
            "range": "± 41433.13286972155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4207245.363636363,
            "unit": "ns",
            "range": "± 102175.7286567027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6704745.84,
            "unit": "ns",
            "range": "± 175696.86999243897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284355.8823529412,
            "unit": "ns",
            "range": "± 5752.609526144993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259003.67741935485,
            "unit": "ns",
            "range": "± 10598.712765599343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225851.73333333334,
            "unit": "ns",
            "range": "± 4086.558969294804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4199053.933333334,
            "unit": "ns",
            "range": "± 42782.74468832811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3810341.066666667,
            "unit": "ns",
            "range": "± 47121.75316509755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17153.516129032258,
            "unit": "ns",
            "range": "± 1838.643974644873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83260.51612903226,
            "unit": "ns",
            "range": "± 4726.319561802873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70153.4,
            "unit": "ns",
            "range": "± 1835.882235693056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81484.93406593407,
            "unit": "ns",
            "range": "± 8458.152160689839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4500.959183673469,
            "unit": "ns",
            "range": "± 581.7810889245667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16092.175824175823,
            "unit": "ns",
            "range": "± 1245.9848455775998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5948132.1640625,
            "unit": "ns",
            "range": "± 18469.22751637793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827756.0127704327,
            "unit": "ns",
            "range": "± 1000.3163284251109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364578.027064732,
            "unit": "ns",
            "range": "± 730.3916845217179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2534181.576729911,
            "unit": "ns",
            "range": "± 1542.7712720395243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798197.0320172991,
            "unit": "ns",
            "range": "± 729.4095746129029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747045.0068359375,
            "unit": "ns",
            "range": "± 2586.203531777099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7545670.666666667,
            "unit": "ns",
            "range": "± 18455.013649670484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19664206.333333332,
            "unit": "ns",
            "range": "± 195783.5038675799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49119162.93333333,
            "unit": "ns",
            "range": "± 445581.05096819793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98384883.86666666,
            "unit": "ns",
            "range": "± 1203931.6492579556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198725820.33333334,
            "unit": "ns",
            "range": "± 1868104.881777889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357969.0425531915,
            "unit": "ns",
            "range": "± 85009.49175339311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2553440.6153846155,
            "unit": "ns",
            "range": "± 42307.64588806311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145514.7252747254,
            "unit": "ns",
            "range": "± 119724.78762803985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5237482.689655173,
            "unit": "ns",
            "range": "± 151708.60303652228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44835.72972972973,
            "unit": "ns",
            "range": "± 2252.761430542447"
          }
        ]
      }
    ]
  }
}