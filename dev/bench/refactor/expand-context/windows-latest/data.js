window.BENCHMARK_DATA = {
  "lastUpdate": 1687334344691,
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
          "id": "18cc285cffeaed343ba3bc79a86a96bba93fafe2",
          "message": "Added BlockProtocolVersion to IActionContext",
          "timestamp": "2023-06-21T16:41:11+09:00",
          "tree_id": "b2895b8b288da583d37e3a26a24c1fe1c342d8a9",
          "url": "https://github.com/greymistcube/libplanet/commit/18cc285cffeaed343ba3bc79a86a96bba93fafe2"
        },
        "date": 1687334322942,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375238.7096774194,
            "unit": "ns",
            "range": "± 89723.07157153067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656059.340659341,
            "unit": "ns",
            "range": "± 146175.34218117179"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2223030.612244898,
            "unit": "ns",
            "range": "± 151595.25562317693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5449193.75,
            "unit": "ns",
            "range": "± 283876.0900770001"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47413.68421052631,
            "unit": "ns",
            "range": "± 3088.331179404859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6929680,
            "unit": "ns",
            "range": "± 157763.178947367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19489123.333333332,
            "unit": "ns",
            "range": "± 308852.1894893752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49553660,
            "unit": "ns",
            "range": "± 890291.5508015177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100834185.71428572,
            "unit": "ns",
            "range": "± 1309989.8184320382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197118920,
            "unit": "ns",
            "range": "± 2384040.2421100195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828370.885416667,
            "unit": "ns",
            "range": "± 26423.20212058068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522934.7591145833,
            "unit": "ns",
            "range": "± 12137.182934265722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168186.021205357,
            "unit": "ns",
            "range": "± 7659.097274646316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649495.2008928573,
            "unit": "ns",
            "range": "± 5987.394694421147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835818.3035714285,
            "unit": "ns",
            "range": "± 1519.5686144566869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769962.6802884615,
            "unit": "ns",
            "range": "± 2495.422766231949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119800,
            "unit": "ns",
            "range": "± 131340.84133952236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3293750,
            "unit": "ns",
            "range": "± 102422.35139126678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4096908.888888889,
            "unit": "ns",
            "range": "± 155738.6254743712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4165212.5,
            "unit": "ns",
            "range": "± 146068.3369882495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6796500,
            "unit": "ns",
            "range": "± 299935.75696319493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271987.5,
            "unit": "ns",
            "range": "± 10462.10232727548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255912.12121212122,
            "unit": "ns",
            "range": "± 7969.385075703676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230887.37373737374,
            "unit": "ns",
            "range": "± 16926.181783469605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039858.8235294116,
            "unit": "ns",
            "range": "± 82763.1338430911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3632685.714285714,
            "unit": "ns",
            "range": "± 85038.89278273963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20764.94845360825,
            "unit": "ns",
            "range": "± 2808.5450428526083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91639.01098901099,
            "unit": "ns",
            "range": "± 7431.830200031491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74535.10638297872,
            "unit": "ns",
            "range": "± 4416.968927295052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106348.45360824742,
            "unit": "ns",
            "range": "± 16459.86351579997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5605.263157894737,
            "unit": "ns",
            "range": "± 1052.2891380277563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18993.548387096773,
            "unit": "ns",
            "range": "± 1661.1158148517611"
          }
        ]
      }
    ]
  }
}