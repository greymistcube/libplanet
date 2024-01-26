window.BENCHMARK_DATA = {
  "lastUpdate": 1706249359619,
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
          "id": "b9b3fa41f1a1b9b093d7fcb6025c36ddfb3ad1da",
          "message": "Prepare 3.9.7",
          "timestamp": "2024-01-26T14:58:26+09:00",
          "tree_id": "f8eca58fb710468ba83443f054ca5b1b04049647",
          "url": "https://github.com/greymistcube/libplanet/commit/b9b3fa41f1a1b9b093d7fcb6025c36ddfb3ad1da"
        },
        "date": 1706249353418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2350136.8928571427,
            "unit": "ns",
            "range": "± 51857.215633027554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2515586.423076923,
            "unit": "ns",
            "range": "± 18435.573729710442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3159965.970588235,
            "unit": "ns",
            "range": "± 101341.61417946286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2945313.2733333334,
            "unit": "ns",
            "range": "± 146486.22643771477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6758878.96969697,
            "unit": "ns",
            "range": "± 184502.27017276862"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38090.07526881721,
            "unit": "ns",
            "range": "± 5333.970254796668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961392.112244898,
            "unit": "ns",
            "range": "± 91723.81260603634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919152.8636363635,
            "unit": "ns",
            "range": "± 81681.74464626667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439862.3229166667,
            "unit": "ns",
            "range": "± 106703.88111330348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5572052.416666667,
            "unit": "ns",
            "range": "± 138651.3504156368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5612786.633333334,
            "unit": "ns",
            "range": "± 49427.70730191529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14278907.766666668,
            "unit": "ns",
            "range": "± 99663.02585101937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36796754.85714286,
            "unit": "ns",
            "range": "± 218720.11593836863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74985896.28571428,
            "unit": "ns",
            "range": "± 350489.2838992652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148557145,
            "unit": "ns",
            "range": "± 689458.2777641722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3724234.456705729,
            "unit": "ns",
            "range": "± 7457.225823085022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209999.3890904018,
            "unit": "ns",
            "range": "± 9903.511122260046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755786.0865071615,
            "unit": "ns",
            "range": "± 2047.4907426905975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915463.8811197917,
            "unit": "ns",
            "range": "± 22965.063465228086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625130.900390625,
            "unit": "ns",
            "range": "± 1370.0901895697853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 589388.4610072544,
            "unit": "ns",
            "range": "± 1241.2221906928362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197041.01063829788,
            "unit": "ns",
            "range": "± 6813.023043733933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188738.89830508476,
            "unit": "ns",
            "range": "± 8288.32051681641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159053.2,
            "unit": "ns",
            "range": "± 3554.4498663832046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082512.1333333333,
            "unit": "ns",
            "range": "± 39860.57566401502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2838341,
            "unit": "ns",
            "range": "± 42039.47278302857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14600.5101010101,
            "unit": "ns",
            "range": "± 2974.641623054988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61168.96153846154,
            "unit": "ns",
            "range": "± 4250.1400533987435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52501.470588235294,
            "unit": "ns",
            "range": "± 4071.5894129122275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65033.14432989691,
            "unit": "ns",
            "range": "± 12394.308230821865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3779.8041237113403,
            "unit": "ns",
            "range": "± 888.4112767460149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14263.949494949495,
            "unit": "ns",
            "range": "± 2451.5780772497906"
          }
        ]
      }
    ]
  }
}